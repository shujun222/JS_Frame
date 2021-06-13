/**
 * 如何压缩js & html
 * author: shujun
 * date: 2021-1-24
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the 5 most important elements:
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js' 
    },

    // 1. 压缩js很简单，改为生产者模式即可
    mode: 'production',

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',

            // 这些配置不加也会生效呀，默认的呢
            // 移除空格
            // collapseWhitespace: true,
            // // remove comments
            // removeComments: true
        }),
    ],

 }