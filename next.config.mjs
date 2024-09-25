import { NextFederationPlugin } from '@module-federation/nextjs-mf';


const nextConfig = {

  output: process.env.STANDALONE_BUILD ? 'standalone' : undefined,

  webpack(config, { isServer, webpack }) {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'host',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          'provider-one': `provider-one@http://${process.env.PROVIDER_1_URL || 'localhost'}:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'provider-two': `provider-two@http://${process.env.PROVIDER_2_URL || 'localhost'}:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          'provider_three': `provider_three@http://${process.env.PROVIDER_3_URL || 'localhost'}:3003/remoteEntry.js`,
          'provider_four': `provider_four@http://${process.env.PROVIDER_4_URL || 'localhost'}:3004/${isServer ? 'server' : 'client'}/remoteEntry.js`,
        },
        extraOptions:{
          debug: process.env.NODE_ENV !== 'production',
          exposePages: false,
          enableImageLoaderFix: true,
          enableUrlLoaderFix: true,
        }
      })
    );
    return config;
  },
}

export default nextConfig