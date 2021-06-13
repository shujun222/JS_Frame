/**
 * output详解
 * 
 * author: shujun
 * date: 2021-1-29
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),

        filename: '[name].js',

        // 所有资源引入公共路径前缀, 
        // 比如： publicPath: '/be-invoker' ->  <script defer src="/be-invoker/main.js">
        // publicPath: '/'根目录，直接双击静态文件时路径地址就不对了，会识别成：file:///D:/main.js；
        // 放web容器下倒是可以随便放那个目录； 但是不配置这个字段不是更好嘛？静态页面、服务器内都可以访问
        // 难道是为了兼容原来的java容器spring配置？
        // publicPath: '/',

        /**
         * 什么是非入口chunk呢？
         * 1. js中import('./xx.js')
         * 2. 插件optimize额外打包的
         * 
         * 不重名名，默认是文件路径_名称； 例如: src_plus_js.js
         */
        chunkFilename: '[name]_chunk.js', //非入口chunk的名称

        /**
         * 还有关键词：
         * library
         * libraryTarget
         */


    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin(),
    ],
 }