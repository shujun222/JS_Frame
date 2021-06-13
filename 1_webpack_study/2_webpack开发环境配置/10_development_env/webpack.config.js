/**
 * 本篇是集大成者，集合js，html， css，pictures, font and so on
 * 
 * reference: https://www.bilibili.com/video/BV1e7411j7T5?p=10
 * author: shujun
 * date: 2021-1-17
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // the 5 most important elements:
    entry: './src/js/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'js/bundle.js' 
    },

    mode: 'development',

    module: {
        rules: [
            // 打包css， less
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.less$/,
                use: ['style-loader', 'css-loader','less-loader']
            },

            // 打包图片
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader',
                options: {
                    // 超过200kb的图片，则不进行base64压缩，还需要下载 file-loader ?
                    limit: 200 * 1024,
                    outputPath: 'img'
                }
            },
            // 负责引入img， 从而能被url-loader处理
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // 不详细记录了，有需求再去参考
            {
                exclude: /\.(css|less|js|html|jpg|png|gif)$/,
                loader: 'file-loader',
                options: {
                    // outputPath: 'media'
                }
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],


    // 拓展系列:
    devServer: {
        host: 'localhost',
        open: true
    }
 }