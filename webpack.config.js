const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: process.env.mode,
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[hash].js',
        publicPath: '/'
    },
    resolve:{
        extensions:['.js','.jsx','.css']
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)$/,
                exclude:'/node_modules/',
                loader:'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                    {loader:'style-loader'},
                    {loader:'css-loader'}
                ]
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html'
        })
    ],
    devServer:{
        host: 'localhost',
        port: 3000,
        hot: true,
        open: true
    }
}