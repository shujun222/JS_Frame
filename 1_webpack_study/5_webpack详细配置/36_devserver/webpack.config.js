/**
 * devserver，开发调试之利器
 * 
 * 方法1. 自己启动server, 服务端允许跨域
 * 方法2：配置proxy
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


    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
    ],

    //1. 默认啥也不配置，直接启动，也是ok的

    // 2. 配置devServer
    devServer: {
        // 这些参数开不开无所谓，默认的
        // 启动gzip压缩
        // compress: true,
        // hot: true,

        port: 5000,
        open: true,
        host: 'localhost',

        // 服务器代理，解决开发环境下的跨域问题
        proxy: {
            // 1. 先去掉app1的域名，让/app1/service开头的服务直接发给webpack-dev-server
            // 2. 再由这里转给targe
            '/app1/service': {
                target: 'http://localhost:3006',
                changeOrigin: true,
                // 发送请求时，请求路径重写，将/api/xx -> /xx 
                // patchRewrite: {
                //     '^/service': ''
                // }
            },
        }
    }
}