const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/app.ts',

  output: {
    path: path.join(__dirname, 'dist'),
    filename: "app.js",
  },

  module: {
    rules: [{
      test: /.ts$/,
      exclude: path.join(__dirname, 'node_modules'),
      loader: 'ts-loader',
    }]
  },

  resolve: {
    extensions: ['.js', '.ts', '.tsx', '.d.ts']
  },

  plugins:[
    new HtmlWebpackPlugin({
      template:'./src/index.html'
    })
  ],

  performance:{
    hints: false
  }
};