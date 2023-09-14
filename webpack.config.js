const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode : process.env.NODE_ENV,
  entry: './client/src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options : {
          presets : ['@babel/env', '@babel/react'],
        }
        
      },
      {
        test : /\.s?css/,
        use : ['style-loader', 'css-loader', 'sass-loader']
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
    title : 'Development',
    template : 'client/public/index.html',
  }),
],
  devServer : {
    static : {
      publicPath: '/dist',
      directory : path.resolve(__dirname, 'dist'),
      watch: true,
    },
    hot : true,
    proxy: {
      '/': 'http://localhost:3000',
      '/shop': 'http://localhost:3000',
      '/create-product': 'http://localhost:3000',
    },
  },
};
