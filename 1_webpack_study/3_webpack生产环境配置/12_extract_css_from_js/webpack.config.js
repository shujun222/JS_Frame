/**
 * r
 * author: shujun
 * date: 2021-1-17
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
                use: [
                    // style-loader会把css嵌入js的style中，要取代它
                    // 'style-loader', 
                    MiniCssExtractPlugin.loader,
                'css-loader'],
            },
            // {
            //     test: /\.less$/,
            //     use: ['style-loader', 'css-loader','less-loader']
            // },
            
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new MiniCssExtractPlugin()
    ],


    // 拓展系列:
    devServer: {
        host: 'localhost',
        open: true
    }
 }