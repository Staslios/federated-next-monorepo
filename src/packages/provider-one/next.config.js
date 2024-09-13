const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

  output: process.env.STANDALONE_BUILD ? 'standalone' : undefined,
  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },

  webpack(config, { isServer, webpack }) {

    const PROVIDER_TWO_URL = process.env.PROVIDER_TWO_URL ?? 'http://localhost:3002'

    config.plugins.push(
      new NextFederationPlugin({
        name: 'provider-one',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ExternalA': './src/components/ExternalizedA/ExternalizedA.js',
          './CatFact': './src/components/CatFact/CatFact.js'
        },
        remotes: {
          'provider-two': `provider-two@${PROVIDER_TWO_URL}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        extraOptions: {
          debug: process.env.NODE_ENV !== 'production',
          automaticAsyncBoundary: true
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig