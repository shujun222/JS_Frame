import routes from './routes';

export default {
    // 默认在路由前面拼接的，url里面不加也可以访问
    base: '/docs/',

    // 这应该是打包之后文件的前缀
    // publicPath: '/static/',

    // 开启hash路由？
    // hash: true,
    // history: {
    //   type: 'hash',
    // },

    // 开启默认layout： @ant-design/pro-layout
    // layout: {},

    routes: routes,

    title: "umi学习指北",

    // mock: false,
  }

