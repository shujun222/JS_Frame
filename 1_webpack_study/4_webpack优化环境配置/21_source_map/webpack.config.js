/**
 * 方便调试，source-map的应用
 * 打包后的js会形成一个 xx.map.js，和原来的src进行映射，方便查看
 * 如果直接显示打包后，那些代码很难看懂的。
 * 
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
    'style-loader', 
    'css-loader',
]

module.exports = {
    // the 5 most important elements:
    entry: './src/js/index.js',
    // 视频中说如果devServer开启 hot:true, index.html就不会自动刷新了，所以要下面这么修改，
    // 但是实际测试发现不改也是依旧会自动刷新的
    // entry: ['./src/js/index.js', './src/index.html'],

    output: {
        path: resolve(__dirname, 'build'),
        filename: 'js/bundle.js' 
    },

    mode: 'development',

    module: {
        rules: [
            // 1. js打包虽然是自动的，但是语法检查是额外需要loader的
            // npm i eslint-loader eslint -D  && package.json中设置eslintConfig
            // {
            //     test: /\.js$/,
            //     exclude: /node_modules/,
            //     loader: 'eslint-loader',
            //     options: {
            //         "fix": true    
            //     }
            // },

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
        open: true,
        // 开启HMR功能， 视频中说开启这个配置后css支持热更新
        // 然而这个写不写，默认都是HRM is enable, 但是所有页面依旧自动刷新
        // hot: true
    },

    // 不加也没关系
    devtool: 'eval-source-map'
    // [inline-|hidden-|eval-][nosources-][cheap-[module-]]source-map
    // 组合情况很多，主要是内联 vs 外联; 加载速度大pk
    // 结论：开发： eval-source-map; 生产： source-map

 }