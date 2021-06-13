/**
 * 服务器代码
 * 方法1:
 * 1. npm i nodemon -g
 *    nodemon server.js
 * 2. node server.js
 * 
 * 
 * 方式二：  
 * 但是此方法不能HMR,动态修改代码？ 为什么有时候会报错文件占用，有时候又正常呢？
 * npm i server -g
 * server -s build
 * 可以同时对比方式一，build之后查看缓存变化
 * 
 * 方式三: webpack-dev-server

 * 
 */

 const express = require('express');
 const app = express();
 // 会造成:build下的文件(比如build.js)的 response headers: Cache-Control: public, max-age=3600
 app.use(express.static('build', {maxAge: 1000 * 3600}));
// app.use(express.static('build'));
 app.listen(3000);
 console.log("server is started");

