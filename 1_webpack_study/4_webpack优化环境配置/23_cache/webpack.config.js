/**
 * JS神奇的缓存问题，竟然找到了讲解这个的视频，比常见博客靠谱多了
 * https://www.bilibili.com/video/BV1e7411j7T5?p=23
 * 
 * 好处：1. 第二次加载很快，不用访问服务器，直接从浏览器上取
 * 然而副作用也是经历了一年多了：
 * 坏处：
 * 1. 代码改了，即便刷新页面，前端也不会更新; 
 *    关键点：因为浏览器是根据文件名称来缓存的
 * 2. be-invoker问题：发版了，还有404的可能
 *      cookie失效了，页面却还是缓存中；这时也不请求后端接口，没有cookie，报错 
 * 
 * 设置缓存方法：
 * 方法1. 配置 babel-loader: cacheDirectory: true, 视频中说有用， 然而并没有啥用，不起效果。。。 不知道哪儿搞错了还是版本问题
 * 方法2. 文件缓存可以起效果：server中设定：app.use(express.static('build', {maxAge: 1000 * 3600}));
 *    a. 一小时强行缓存，改了文件也不会更新
 *    b. 使用[hash:10]来改变文件后缀
 *       一打包名字变了，刷新便会重新加载，秒啊；
 *       然而却引发另一个小问题：改一个文件(例如一个样式css)，重新webpack，如果所有的输出文件名都重新hash了，前端的缓存全面失效，全部重新加载；
 *    c. 使用[chunkhash:10]来改变文件后缀
 *       一个entry是一个chuck, 所有的css，js打包后全部是一个名字
 *       这样一改某个文件，整个chuck也得全部换呀？
 *    d. 使用[contenthash:10]来改变文件后缀  
 *       根据文件来生成后缀，文件不改，后缀不变，hash就不变
 *       这个明显是最好的呀，那就不明白其它2钟hash存在的必要型了
 *       但是当前模拟不了，因为css文件也打包在了build.js中，改什么地方都是在build。js，
 *       它注定是会变化的；css独立不出来：MiniCssExtractPlugin不好使   
 *         
 *    
 * author: shujun
 * date: 2021-1-24
 * 
 */

const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const { loader } = require('mini-css-extract-plugin');


const commonCssLoader = [
    'style-loader',
    'css-loader',
]

module.exports = {
    entry: './src/js/index.js',
    // 视频中说如果devServer开启 hot:true, index.html就不会自动刷新了，所以要下面这么修改，
    // 但是实际测试发现不改也是依旧会自动刷新的
    // entry: ['./src/js/index.js', './src/index.html'],

    output: {
        path: resolve(__dirname, 'build'),
        // filename: 'js/bundle.js'
        // filename: 'js/[name].js',
        // filename: 'js/bundle.[hash:10].js',
        // filename: 'js/bundle.[chunkhash:10].js',
        // filename: 'js/bundle.[contenthash:10].js'
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

            {
                oneOf: [
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
                            ],
                            // 这个配置据说可以让js第二次刷新的时候去都缓存，然后貌似设置了也没啥用
                            cacheDirectory: true
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
                        use: [...commonCssLoader, 'less-loader']
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
            filename: 'css/build.[hash:10].css'
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