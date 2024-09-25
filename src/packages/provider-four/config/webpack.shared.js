const MiniCssExtractPlugin = require('mini-css-extract-plugin');

/**
 * @type {import('webpack').Configuration}
 **/
const webpackConfig = {
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(js|ts)x?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, // Extract CSS into separate files
          'css-loader', // Interprets @import and url() like import/require()
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Naming convention for extracted CSS files
    }),
  ]
};

module.exports = webpackConfig;
