/**
 * 这是整个程序的入口文件
 * 
 * 结论：
 * 1. mode为生产，可以比开发模式多一个压缩功能，打出来的bundle.js容量会更小。
 * 2. webpack可以直接打包js/json, 不能直接打包css，需要借助loader
 */

 import './index.css';
 import data from './data.json';

 function add(a, b) {
    return a + b;
 }

 console.log(add(1, 2));
 console.log(data);

