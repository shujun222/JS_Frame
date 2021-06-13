/**
 * 
 * author: shujun
 * date: 2021-1-17
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { loader } = require('mini-css-extract-plugin');
const { env } = require('process');

//browserlist默认是使用‘production’, 除非强行指定
// process.env.NODE_ENV = 'development';

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
                    'style-loader', 
                    // MiniCssExtractPlugin.loader,
                'css-loader',
                //  css 兼容性处理： postcss --> postcss-loader, postcss-preset-env
                //  作用：帮postcss找到 package.json中的browserslist里面的配置，通过配置会改变打包后的css，
                // "browserslist": {
                //     "development": [
                //       "last 1 chrome version",
                //       "last 1 firefox version"
                //     ],
                //     "production": [
                //       ">0.2%",
                //       "not dead"
                //     ]
                //   },
                //  打包后的css会主动添加下兼容性的写法   
                {
                    loader: 'postcss-loader',
                    options: {
                        ident: 'postcss',
                        plugins: () => {
                            require('postcss-preset-env')()
                        }
                    }
                }
            ],
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