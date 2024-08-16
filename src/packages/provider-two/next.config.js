const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

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
        shared: {},
        extraOptions: {
          debug: true, // `false` by default
          exposePages: false, // `false` by default
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig