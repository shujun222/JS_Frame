/**
 * externals配置：如果index中引入了cdn在线链接，那么就没必要打包到bundle.js中啦
 * 1.	Js中还是 import $ from ‘jquery’
   2.	Webpack中配置 
    externals: {
        jquery: 'jQuery'
    }
   3. html中引入cdn在线链接
 * 
 * author: shujun
 * date: 2021-1-27
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

    // 1. 不配置：asset bundle.js 322 KiB 
    // 2. 配置的情况：asset bundle.js 4.31 KiB 
    // 不过html中要引入cdn在线链接，否则程序无法执行
    externals: {
        jquery: 'jQuery'
    }
 }