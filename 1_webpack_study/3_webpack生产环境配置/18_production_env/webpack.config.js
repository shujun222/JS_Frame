/**
 * 本篇是集大成者，集合js，html， css，pictures, font and so on
 * 如何搭建生产环境webpack脚手架
 * 
 * reference: https://www.bilibili.com/video/BV1e7411j7T5?p=18
 * author: shujun
 * date: 2021-1-24
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');


const commonCssLoader = [
    // 提取css成单独文件并压缩的地方，会报错，暂且注释吧
    'style-loader', 
    // MiniCssExtractPlugin.loader,
    'css-loader',
    // {
    //     loader: 'postcss-loader',
    //     options: {
    //         ident: 'postcss',
    //         plugins: () => {
    //             require('postcss-preset-env')()
    //         }
    //     }
    // }
]

module.exports = {
    // the 5 most important elements:
    entry: './src/js/index.js',

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'js/bundle.js' 
    },

    // key place
    mode: 'production',

    module: {
        rules: [
            // 1. js打包虽然是自动的，但是语法检查是额外需要loader的
            // npm i eslint-loader eslint -D  && package.json中设置eslintConfig
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    "fix": true    
                }
            },

            // js兼容性写法
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
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

            // js 压缩，开启production就好


            // 2打包css， less
            // 1. loader打包，2. postcss-loader来兼容 3. OptimizeCssAssetsWebpackPlugin来压缩
            {
                test: /\.css$/,
                use: [...commonCssLoader],
            },
            {
                test: /\.less$/,
                use: [...commonCssLoader,'less-loader']
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

            // 打包其它资源不详细记录了，有需求再去参考
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
            template: 'src/index.html',
            // html处理我感觉没啥必要，很多都默认是开启的
            // 移除空格
            // collapseWhitespace: true,
            // // remove comments
            // removeComments: true
        }),

        new MiniCssExtractPlugin({
            filename: 'css/build.css'
        }),
        new OptimizeCssAssetsWebpackPlugin()
    ],


    // 拓展系列:
    devServer: {
        host: 'localhost',
        open: true
    }
 }