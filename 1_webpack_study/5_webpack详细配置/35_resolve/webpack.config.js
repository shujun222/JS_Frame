/**
 * 此resolve非彼resolve，还是很有用的
 * 
 * author: shujun
 * date: 2021-01-30
 */
const {resolve} = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

    resolve: {
        // 这个非常好
        alias: {
            $cssPath: resolve(__dirname, 'src/css')
        },

        // 配置省略文件路径后缀
        // extensions: ['.js', '.json', '.jsx', '.css'],
    }

}