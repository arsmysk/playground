const path = require('path');

module.exports = {
  entry: './src/script/script.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/script')
  }
};
