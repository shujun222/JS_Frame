1.basic
最基础的create-react-app
默认打完包后的路径是绝对路径：/static/js/xx，只适合在web容器中访问，不可以直接打开index.html访问；
修改package.json:   "homepage": ".", 
貌似完美

2. detail
列举create-react-app的常用方法：
官网：http://www.html.cn/create-react-app/

方便开发的：
1) 语法高亮
默认都支持吧
2）编辑器支持调试
这个貌似也用不着，可能以后nodejs用的着？浏览器里面本来就可以调试了
安装Chrome Debugger Extension; .vscode中加入launch.json
3）隔离开发组件
有个叫Storybook的插件，可以看到组件的status, 这东西chrome-for-react插件也可以，而且实际开发中用途不大
4）解析包大小构成
这个很厉害，可以知晓到底哪儿拖慢了构建速度
source-map-explorer; 
"analyze": "source-map-explorer build/static/js/main.*",

样式和资源：
1）public文件夹
public中的东西不特别编译，不过据说要根据变量%PUBLIC_URL%引用，
但是我实践过，不这么引用也没事儿
2）代码拆分（code splitting）
这个太有作用了，动态路由设置动态加载，按需加载
这样应该提高不了打包速度吧？但是可以提高运行速度

构建App
1) 使用全局变量
在index.html中定义 window.env="be-quark" 
或者 ？
REACT_APP_SECRET_CODE process.env.REACT_APP_SECRET_CODE调用
根目录下添加文件：.env, 添加任何REACT_APP_ 开头的任何其他环境变量。
2）添加样式 reactstrap, bootstrap, 但是感觉没antd好看呢
3) 定义路由react-router-dom，还蛮好用的嘛
4）原来serviceWorker.unregister()就是大名鼎鼎的PWA（progresive web apps），离线缓存
5）构建生产环境：三个chunk.js文件的作用 && 缓存经典文章拜读：
https://jakearchibald.com/2016/caching-best-practices/

测试：
1）运行测试
react-scripts封装的jest，目前还不会用，不过目测应该和junit思想一致
2）调试测试

后端集成
1）可以使用proxy集成代理
2）ajax fetch axios

部署
1）npm run build之后就可以 serve启动服务了
2）也可以嵌入tomcat，jetty等其它任何服务器中


3.eject


4.react-app-rewired
https://github.com/timarney/react-app-rewired
