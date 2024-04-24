const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './main.js',
  output: {
    filename: 'output.js',
    path: __dirname
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        mangle: {
          properties: true,
        },
      },
    }),
  ],
  },
};