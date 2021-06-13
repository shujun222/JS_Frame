/**
 * webpack-dev-server, 启动dev server
 * 1. 核心关键点还是在于不能直接 npm install webpack-dev-server -D, 得安装最新未发布版本
 *    npm i webpack-dev-server@next -D
 * 2. 用法：install后当前目录下执行webpack-dev-server || webpack server
 *    如果要特俗配置，开启 devServer: {...
 *    https://webpack.js.org/configuration/dev-server/#devserver  
 * 
 * Reference: https://github.com/webpack/webpack-dev-server#readme
 *  
 * 
 * date: 2021-1-15
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
    ],



    // 非五大核心概念，为了方便开发：用来自动化（自动编译，自动打开浏览器，自动刷新浏览器）
    // 特点: 只会在内存中编译打包，不有任何输出, 那问题来了： contentBase有个毛用呢
    // 启动命令： npx webpack-dev-server
    devServer: {
        // 项目构建后路径, 貌似"webpack-dev-server": "^4.0.0-beta.0"都没有这个字段了
        // contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        // compress: true,
    //     port: 3000,
        host: 'localhost',
    //     // 自动打开浏览器
        open: true
    }

}