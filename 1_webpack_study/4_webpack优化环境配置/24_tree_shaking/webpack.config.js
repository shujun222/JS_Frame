/**
 * https://www.bilibili.com/video/BV1e7411j7T5?p=24
 * 
 * tree shaking，树妖树摇，去除无用的代码
 * 开启条件：
 * 1. 使用es6模块话 2. mode:production
 * 2. package.json中增加配置  "sideEffects": false
 *    会默认删掉css哦
 *    所以要这么配置: "sideEffects": ["*.css", "*.less"]
 * 
 * author: shujun
 * date: 2021-1-26
 * 
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const commonCssLoader = [
    'style-loader',
    'css-loader',
]

module.exports = {
    // the 5 most important elements:
    entry: './src/js/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'js/bundle.[contenthash:10].js'
    },

    mode: 'production',

    module: {
        rules: [
            // 2打包css， less
            // 1. loader打包，2. postcss-loader来兼容 3. OptimizeCssAssetsWebpackPlugin来压缩
            {
                test: /\.css$/,
                use: [...commonCssLoader],
            },
            {
                test: /\.less$/,
                use: [...commonCssLoader, 'less-loader']
            },

        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
        }),
    ],


    // 拓展系列:
    devServer: {
        host: 'localhost',
        open: true,
    },
}