/**
 * 1. loader的使用：下载，直接使用
 * 2. plugins的使用: 下载，引入，再使用
 * 
 * 这一次使用被我自己巨坑了，卡了一天：
 * 1. 插件装错了，对着视频教程打成了html-webpack-plugins，多了个s，而且也有这个插件，呵呵
 * 2. 直接npm i html-webpack-plugin, 装的是"html-webpack-plugin": "^4.5.1", 不匹配webpack5.12.2
 * 所以有版本等疑难杂症，得看官网吧: https://www.npmjs.com/package/html-webpack-plugin
 * 
 */

// const HtmlWebpackPlugin = require('html-webpack-plugins');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}