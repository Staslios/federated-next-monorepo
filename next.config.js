const { NextFederationPlugin } = require('@module-federation/nextjs-mf');


const nextConfig = {

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
          'pack-a': `pack-a@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        exposes: {},
        shared: {},
        extraOptions:{
          automaticAsyncBoundary: true,
          debug: true
        }
      })
    );

    return config;
  },
}

module.exports = nextConfig