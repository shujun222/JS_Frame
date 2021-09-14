export default [
    { exact: true, path: '/', redirect: "/user2"},
    { exact: true, path: '/list', component: 'list', name: '师徒四人' },
    { exact: true, path: '/user2', component: 'user' },

    {
        path: '/page',
        component: '@/layouts/index',
        routes: [
          { path: '/page/list', component: 'list' },
          { path: '/page/edit', component: 'edit' },
        ],
      }, 
];


/**
 * 用法：
 * 配置 location 和 path 匹配后用于渲染的 React 组件路径。可以是绝对路径，也可以是相对路径，
 * 如果是相对路径，会从 src/pages 开始找起。
 * 如果指向 src 目录的文件，可以用 @，也可以用 ../。
 * 比如 component: '@/layouts/basic'，或者 component: '../layouts/basic'，推荐用前者。

   exact: true, 严格模式
   
 */
