const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { UniversalFederationPlugin } = require('@module-federation/node');

module.exports = {
  client: new ModuleFederationPlugin({
    name: 'provider_four',
    filename: 'remoteEntry.js',
    remotes: {
      remote2: 'remote2@http://localhost:3002/client/remoteEntry.js',
    },
    exposes: {
      './Four': './src/Four',
    }
  }),
  server: [
    new UniversalFederationPlugin({
      remoteType: 'script',
      name: 'provider_four',
      filename: 'remoteEntry.js',
      library: { type: 'commonjs-module' },
      isServer: true,
      remotes: {
        remote2: 'remote2@http://localhost:3002/server/remoteEntry.js',
      },
      exposes: {
        './Four': './src/Four',
      }
    }),
  ],
};
