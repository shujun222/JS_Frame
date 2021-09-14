官方教程：https://umijs.org/zh-CN

1. 简洁创建应用 1_concise
yarn add umi  || npm install umi
npx umi g page index
npx umi dev


2. 创建脚手架 && 了解大致功能 2_scaffold/3_detail
a. 快速启动
npx @umijs/create-umi-app  || yarn create @umijs/umi-app
yarn
yarn start
UmiJs目录结构详解：https://umijs.org/zh-CN/docs/directory-structure
b. 配置
在 .umirc.ts 或 config/config.ts 中配置项目和插件
c. 插件
如何开启插件：https://umijs.org/zh-CN/docs/plugin
d. 路由
   配置路径 && 约定式路由
e. 设计思想：通过统一的umi来收敛所有的插件和插件集, 通过配置按需开启 
   https://umijs.org/zh-CN/docs/how-umi-works  
f. 查看webpack配置信息：npx umi webpack > show_webpack.config.js
h. 其它
   mock数据
   按需加载
   待续...






