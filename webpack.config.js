const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  // entry: {
  //   app: './src/index.jsx',
  //   // vendor: [
  //   //     // 'axios',
  //   //     // 'bootstrap',
  //   //     'react',
  //   //     'react-dom',
  //   //     // 'react-redux',
  //   //     // 'redux',
  //   //     // 'redux-saga',
  //   // ],
  // },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index_bundle.js',
    publicPath: '/',
    sourceMapFilename: 'bundle.map.js',
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
