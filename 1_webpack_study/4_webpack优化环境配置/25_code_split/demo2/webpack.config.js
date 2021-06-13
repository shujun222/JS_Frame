/**
 * 代码多入口打包
 * 2. 使用配置： optimization, 会把所有node_module依赖分离打包成一个chunk文件
 *    例如：把study.js中（import jquery）单独打包成js了
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