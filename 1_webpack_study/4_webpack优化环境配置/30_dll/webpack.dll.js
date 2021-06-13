const webpack = require('webpack');
const {resolve} = require('path');


module.exports = {
    entry: {
        // 最终打包生成 [name] --> jQuery
        // ['jquery'] --> 表示要打包的库是jQuery, 数组，当然可以添加其它依赖
        jquery: ['jquery']
    },
    output: {
        path: resolve(__dirname, 'dll'),
        filename: '[name].js',
        //打包的库里面向外暴露粗去的内容叫什么名字
        library: '[name]_[hash]'
    },

    mode: 'production',

    plugins: [
        // 打包生成一个manifest.json: 提供和jquery映射
        new webpack.DllPlugin({
            // 映射库的暴露的内容名称
            name: '[name]_[hash]', 
            // 输出文件路径
            path: resolve(__dirname, 'dll/manifest.json')
        }),
    ],

}