/**
 * 多进程打包，提高打包速度
 * 这节知识点不错，很有用
 * 
 * 我们选取一个比较耗时的操作：babel-loader兼容性处理
 * 
 * 1. npm i thread-loader -D
 * 2. 
 * 
 * author: shujun
 * date: 2021-1-27
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

    mode: 'development',

    module: {
        rules: [
            /*
             js兼容性处理：babel-loader 
            */
            {
                test: /\.js$/,
                exclude: /node_modules/,

                // 1. 不开启多进才打包：webpack 5.12.2 compiled successfully in 822 ms
                // loader: 'babel-loader',
                // options: {
                //     presets: ['@babel/preset-env']
                // }

                /* 2. 秀一下多进程：简直质的飞升呀, 有可能变慢了
                   多进程启动为600ms, 进程通信也有开销
                   所以要对耗时的loader才好，否则得不偿失阿
                */
                use: [
                    // a. 简约写法：webpack 5.12.2 compiled successfully in 1260 ms
                    // 'thread-loader',

                    // b. 配置写法：webpack 5.12.2 compiled successfully in 1094 ms
                    // 应该是本例子比较简单，难分伯仲
                    {
                        loader: 'thread-loader',
                        options: {
                            workers: 4 // 进程4个
                        }
                    },
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['@babel/preset-env']
                        }
                    }
                ]
                
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

 }