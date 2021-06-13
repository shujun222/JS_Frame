/**
 * 代码多入口打包
 * 1. 如果entry配置多入口，打包之后会变成多个js文件
 *    问题是index.html还是把两个文件都引入进去了
 *    如果真的实现所有代码分离，是不是得新建一个文件家demo2，彻底分开index.html呢？
 * 
 * author: shujun
 * date: 2021-1-26
 * 
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    // 单入口方式:
    // entry: './src/js/index.js',

    // 多入口方式:
    entry: {
        "index": './src/js/index.js',
        "study": './src/js/study.js'
    },

    output: {
        path: resolve(__dirname, 'build'),
        // 只生成一个文件
        // filename: 'js/bundle.[contenthash:10].js'

        // [name]是webpack约定俗称的东东，会根据entry中定义的多入口生成多个文件
        filename: 'js/[name].[contenthash:10].js'
    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],

}