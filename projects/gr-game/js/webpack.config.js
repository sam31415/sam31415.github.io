const TerserPlugin = require('terser-webpack-plugin');

module.exports = [
  {
    entry: './main.js',
    output: {
      filename: 'output.js',
      path: __dirname
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        // terserOptions: {
        //   mangle: {
        //     properties: true,
        //   },
        // },
      }),
    ],
    },
  },
  {
    entry: './mainb.js',
    output: {
      filename: 'outputb.js',
      path: __dirname
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        // terserOptions: {
        //   mangle: {
        //     properties: true,
        //   },
        // },
      }),
    ],
    },
  },
  {
    entry: './mainc.js',
    output: {
      filename: 'outputc.js',
      path: __dirname
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        // terserOptions: {
        //   mangle: {
        //     properties: true,
        //   },
        // },
      }),
    ],
    },
  },
  {
    entry: './mainMouse.js',
    output: {
      filename: 'outputMouse.js',
      path: __dirname
    },
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin({
        // terserOptions: {
        //   mangle: {
        //     properties: true,
        //   },
        // },
      }),
    ],
    },
  }
];

// Run npx webpack in the folder to build the project