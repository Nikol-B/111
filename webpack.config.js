const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/js/main.js'),
    },
//   entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    
    filename: 'main.js',
  },
  module: {
    rules: [
      {  // JavaScript
        test: /\.js$/,
        exclude: /node_modules/,
        // use: ['babel-loader'],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        
        test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
       new HtmlWebpackPlugin({
        title: 'webpack Boilerplate',
        template: path.resolve(__dirname, './src/index.html'), // шаблон
        filename: 'index.html', // название выходного файла
        // применять изменения только при горячей перезагрузке
        
    }),
    // new webpack.HotModuleReplacementPlugin(),

  ],

  mode: 'development',
  devServer: {
    proxy: {
        '/api/registration': 'http://localhost:9090',
        '/api/ping': 'http://localhost:9090'
      },
    static: {
        directory: path.join(__dirname, './dist'),
      },
      historyApiFallback: true,
    
      
      open: true,
      compress: true,
      hot: true,
      port: 8080,
  },

  
};
