const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

  output: process.env.STANDALONE_BUILD ? 'standalone' : undefined,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },

  webpack(config, { isServer, webpack }) {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'provider-one': `provider-one@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'provider-two': `provider-two@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
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