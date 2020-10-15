const path = require('path');

module.exports = {
  entry: {
    core: './src/core.js',
    utils:'./src/utils.js',
    transaction: './src/transaction.js',
    account: './src/account.js'
  },
  output: {
    filename: '[name].min.js',
    path: path.resolve(__dirname, 'harmony'),
  },
};