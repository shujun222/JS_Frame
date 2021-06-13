/**
 * dll怎么把不常用的东西抽离出来，这样就不用每次都去打包这些东西了
 * 和上一节的externals很类似，
 * 区别：
 * 1. externals是可以引用在线cdn链接
 * 2. dll是常用的打包成本地js，这样也就包括一些自己定义的固有js了
 * 
 * 但是很不幸：使用插件：add-asset-html-webpack-plugin
 * 会报错： Cannot read property 'tapPromise' of undefined
 * 可能又是webpack版本问题了。。。
 * 
 * 
 * Reference: 
 * https://www.bilibili.com/video/BV1e7411j7T5?p=30
 * https://www.npmjs.com/package/add-asset-html-webpack-plugin
 *  
 * author: shujun
 * date: 2021-1-28
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

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
        new AddAssetHtmlPlugin({ 
            filepath: resolve(__dirname, 'dll/jquery.js') 
        }),
        // 若注释下面代码，则结果为：
        /*
            ./src/index.js 40 bytes [built] [code generated]
            ../node_modules/jquery/dist/jquery.js 281 KiB [built] [code generated]
            webpack 5.12.2 compiled successfully in 351 ms
        
        */
    

        // 开启，则结果并不像视频中说的那样减小了build.js， 倒是时间减少了：
        // 告诉webpack哪些库不参与打包，使用时名称也得随之改变
        // 同样，如果开启DllReferencePlugin， 不打包，index.html就找不到引用的jquery了
        // 还需要
        /**
           ./src/index.js 40 bytes [built] [code generated]
            delegated ../node_modules/jquery/dist/jquery.js from dll-reference jquery_c102eca8a777da18e062 42 bytes [built] [code generated]
            external "jquery_c102eca8a777da18e062" 42 bytes [built] [code generated]
          webpack 5.12.2 compiled successfully in 148 ms
         * 
         */
        new webpack.DllReferencePlugin({
            manifest: resolve(__dirname, 'dll/manifest.json')
        }),
       
    ],
 }