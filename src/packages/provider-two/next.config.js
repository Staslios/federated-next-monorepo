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
        name: 'provider-two',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ExternalB': './src/components/ExternalizedB/ExternalizedB.js'
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