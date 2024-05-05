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
          properties: false,
        },
      },
    }),
  ],
  },
};

// Run npx webpack in the folder to build the project