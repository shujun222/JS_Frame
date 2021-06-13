/**
 * 1. 下载url-loader, 2. 配置loader
 * 图片默认会转为base64， 可以设置options改
 * 详细参考: https://www.bilibili.com/video/BV1e7411j7T5?p=7
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

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]

}