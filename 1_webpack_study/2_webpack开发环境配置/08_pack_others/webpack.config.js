/**
 * 1. 下载file-loader, 2. 配置loader
 * 打包除图片，css，html之类的其它资源: 视频，字体之类的
 * 详细参考: https://www.bilibili.com/video/BV1e7411j7T5?p=8
 */
const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            // css-loader负责把css编译成所谓的common.js? style-loader是在js中插入一个<style></style>，里面放的是css-loader的结果
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
           
            // 单配置这个，而不配置html-loader的话，只能打包样式(css|less)中的图片引用
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader'
            },

            // 负责引入img， 从而能被url-loader处理
            {
                test: /\.html$/,
                loader: 'html-loader'
            },

            // 不详细记录了，有需求再去参考
            {
                exclude: /\.(css|less|js|html)$/,
                loader: 'file-laoder'
            }

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}