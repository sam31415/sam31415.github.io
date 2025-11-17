const ruleWeights = {
  "N0/B2/S2/I13": 5,
  "N0/B2/S24/I36/7": 1,
  "N0/B2/S24/I36/8": 1,
  "N0/B2/S24/I36/9": 1,
  "N0/B2/S24/I36/10": 1,
  "N0/B2/S24/I36/11": 1,
  "N0/B2/S37/I1568/3": 1,
  "N0/B245/S347/I/5": 1,
  "B234568/S2458/I1/6": 1,
  "B234568/S2458/I1/7": 1,
  "B234568/S2458/I1/8": 1,
  "B234568/S2458/I1/9": 1,
  "B234568/S2458/I1/10": 1,
  "B234568/S2458/I1/11": 1,
  "B234568/S2458/I1/12": 1,
  "B234568/S2458/I1/13": 1,
  "B234568/S2458/I1/14": 1,
  "B234568/S4568/I1/4": 1,
  "B234568/S4568/I1/5": 1,
  "B234568/S458/I1/4": 1,
  "B234568/S458/I1/5": 1,
  "N0/B24568/S3478/I/4": 3,
  "N0/B24568/S3478/I/5": 1,
  "N0/B24568/S3478/I/6": 1,
  "N0/B24568/S3478/I/7": 1,
  "N0/B24568/S34578/I/9": 1,
  "N0/B24568/S34578/I/12": 1,
  "N0/B24568/S34578/I/13": 1,
  "N0/B24568/S34578/I/14": 1,
  "N0/B24568/S34678/I/4": 1,
  "N0/B24568/S34678/I/5": 1,
  "N0/B24568/S34678/I/6": 1,
  "N0/B24568/S34678/I/7": 3,
  "N0/B24568/S34678/I/8": 3,
  "N0/B24568/S34678/I/9": 1,
  "N0/B24568/S34678/I/10": 1,
  "N0/B24568/S34678/I/11": 1,
  "N0/B25/S345/I/4": 1,
  "N0/B25/S345/I/5": 1,
  "N0/B25/S345/I/6": 1,
  "N0/B2568/S345678/I/8": 1,
  "N0/B2568/S345678/I/10": 1,
  "N0/B2568/S345678/I/12": 1,
  "N0/B2568/S34578/I/4": 1,
  "N0/B2568/S34578/I/5": 1,
  "N0/B2568/S34578/I/6": 1,
  "N0/B2568/S34578/I/7": 1,
  "N0/B2568/S34578/I/8": 1,
  "N1/B2/S3/I/11": 1,
  "N1/B23468/S146/I5/12": 1,
  "N15/B23/S/I/5": 1,
  "N15/B23/S3/I/5": 1,
  "N15/B23/S3/I45/5": 1,
  "N15/B23/S35/I46/5": 1,
  "N15/B23/S36/I45/5": 1,
  "N15/B245/S347/I/5": 1,
  "N18/B234/S45/I13/6": 1,
  "N18/B2345/S457/I13/6": 1,
  "N19/B248/S457/I1/6": 1,
  "N20/B23/S3/I45/5": 1,
  "N20/B23/S3/I/5": 1,
  "N20/B245/S347/I/5": 1,
  "N30/B24/S23/I1/7": 1,
  "N30/B24/S23/I1/9": 1,
  "N30/B24/S23/I1/10": 1,
  "N30/B24/S23/I1/11": 1, 
  "N33/B23/S3/I/11": 1,
  "N42/B234/S345/I1/10": 1,
  "N47/B2/S25/I/11": 1,
}

const ruleKeys = Object.keys(ruleWeights);

const TerserPlugin = require('terser-webpack-plugin');

module.exports = [{
  entry: './main.js',
  output: {
    filename: 'output.js',
    path: __dirname
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        // mangle: {
        //   properties: {
        //     reserved: ruleKeys,
        //   },
        // },
      },
    }),
  ],
  },
}, 
{
  entry: './mainAdvent.js',
  output: {
    filename: 'outputCorner.js',
    path: __dirname
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        // mangle: {
        //   properties: {
        //     reserved: ruleKeys,
        //   },
        // },
      },
    }),
  ],
  },
},
];

// Run npx webpack in the folder to build the project