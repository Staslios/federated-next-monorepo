const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

  reactStrictMode: true,
  experimental: {
    esmExternals: false,
  },

  webpack(config, { isServer, webpack }) {

    config.plugins.push(
      new NextFederationPlugin({
        name: 'pack-a',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './ExternalA': './src/components/ExternalizedA/ExternalizedA.js'
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