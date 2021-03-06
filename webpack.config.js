const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './_src/index.js',
  output: {
    filename: 'main.[hash].js',
    path: path.resolve(__dirname, 'dist')
  },
   plugins: [
     new HtmlWebpackPlugin({
       title: 'Hi'
     })
  ],	
	mode: 'production'
};
