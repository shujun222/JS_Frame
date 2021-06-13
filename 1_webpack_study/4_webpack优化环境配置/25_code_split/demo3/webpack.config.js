/**
 * 代码多入口打包
 * 3. 通过es10的语法import来实现，此处例子没理解，代码没写完；
 * 可参考视频后半段：
 * https://www.bilibili.com/video/BV1e7411j7T5?p=25
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

    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }

}