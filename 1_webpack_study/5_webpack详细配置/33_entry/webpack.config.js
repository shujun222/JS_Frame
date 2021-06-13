/**
 * entry详解
 * 1. 入口为string, 
 *    输出为一个，如果输出文件名为[name].js, 那么默认为main.js
 * 2. 
 * 
 * 
 * author: shujun
 * date: 2021-1-29
 * 
 */

const {resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    // 1. 入口为string, 
    //  输出为一个，如果输出文件名为[name].js, 那么默认为main.js
    // entry: './src/index.js',

    // 2. 入口为array
    // 输出也是一个，不过整体打包到array[0]要输出的文件中了, 
    // 例如即便在 index.js中去掉了require('./plus'), plus.js也会打包到main.js中
    // 据说还有作用是在开发环境下HMR中热生效
    // entry: ['./src/index.js', './src/plus.js'],

    // 3. 入口为object, 输出为多个
    entry: {
        index: './src/index.js',
        plus: './src/plus.js',
        // 方式二、三组合用, 这样可以把同类型文件打包到一个chunk中
        operate: ['./src/add.js', './src/plus.js'],
    },

    output: {
        path: resolve(__dirname, 'build'),
        filename: '[name].js' 
    },

    mode: 'development',

    plugins: [
        new HtmlWebpackPlugin(),
    ],
 }