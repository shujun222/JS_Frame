/**
 * JS语法兼容，这又是何必为难自己呢？ 
 * 我觉得其实IE访问不了就算了吧
 * author: shujun
 * date: 2021-1-23
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
             1. 方式一：基本语法兼容性处理
                用法：安装插件： npm i babel-loader @babel/core @babel/preset-env -D
                然而babel-loader只能转换基本语法，如promise它就爱莫能助了
             2. 方式二:全部兼容性处理，
                需要更强大的插件登场：@babel/polyfill
                用法：npm i @babel/polyfill -D 
                index.js中 import '@babel/polyfill';
                好强大的插件呀，竟然把bundle.js的大小
                1.1kb -> 393kb，(lll￢ω￢)
             3. 方式三：比较靠谱的，按需加载 core-js
                用法： npm i core-js -D
                取消方式二的 import, 并且要修改presets的写法，这些配置也真是可以的，
                不看教程或者文档，肯定一步一个坑
                当然成功后还是很赞的，bundle.js大小 104KB

            */
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    // 方式一、方式二的写法：
                    // presets: ['@babel/preset-env']

                    // 方式三的写法
                    presets: [
                        [
                            '@babel/preset-env',
                            // 方式三的按需加载
                            {
                                //按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: {
                                    version: 3
                                },
                                // 指定兼容到哪个版本浏览器
                                targets: {
                                    chrome: '60',
                                    firefox: '60',
                                    ie: '9'
                                }
                            }
                        ]
                    ]    
                }
            },
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

 }