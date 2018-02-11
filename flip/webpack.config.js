const path = require('path');

module.exports = {
  entry: {
    bundle: './src/script/script.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public/script')
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve(__dirname, "src/script")
    ]
  },
  devtool: "inline-source-map"
};
