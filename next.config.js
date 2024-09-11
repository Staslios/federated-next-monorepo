const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

  output: process.env.STANDALONE_BUILD ? 'standalone' : undefined,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },

  webpack(config, { isServer, webpack }) {

    const PROVIDER_ONE_URL = process.env.PROVIDER_ONE_URL ?? 'http://localhost:3001'
    const PROVIDER_TWO_URL = process.env.PROVIDER_TWO_URL ?? 'http://localhost:3002'

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'provider-one': `provider-one@${PROVIDER_ONE_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'provider-two': `provider-two@${PROVIDER_TWO_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        extraOptions:{
          debug: process.env.NODE_ENV !== 'production',
          automaticAsyncBoundary: true
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig