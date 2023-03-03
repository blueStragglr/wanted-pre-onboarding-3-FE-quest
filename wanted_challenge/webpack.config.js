const path = require('path')
const WebpackRefresh = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = {
  name: 'PreOnBoarding',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.jsx', '.js']
  },
  entry: {
    app: './client'
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      options: {
        presets: [
          ['@babel/preset-env', {
            targets: {
              browsers: ['> 1% in KR']
            },
            debug: true
          }],
          ['@babel/preset-react']
        ],
        plugins: [
          'react-refresh/babel'
        ]
      }
    }]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
    publicPath: '/dist/'
  },
  plugins: [
    new WebpackRefresh()
  ],
  devServer: {
    historyApiFallback: true,
    devMiddleware: { publicPath: '/dist/' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
}
