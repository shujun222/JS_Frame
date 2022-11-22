import { defineConfig } from 'umi';

export default defineConfig({
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   { path: '/index', component: '@/pages/index', name: '主应用首页' },
  //   { exact: true, path: '/app1', microApp: 'app1', name: 'app1' },
  //   { exact: true, path: '/app2', microApp: 'app2', name: 'app2-没有配置qiankun' },
  //   { exact: true, path: '/app3', microApp: 'app3', name: 'app3 - server命令' },
  //   { exact: true, path: '/umijs', microApp: 'umijs', name: 'umijs官网' },
  // ],

  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
          // 子应用通过钩子函数的参数props可以拿到这里传入的值
          props: {},
        },

        {
          name: 'app3',
          entry: '//localhost:5000'
        },
        {
          name: 'umijs',
          entry: 'https://umijs.org/'
        }
      ],
      jsSandbox: true, // 是否启用 js 沙箱，默认为 false
      prefetch: true, // 是否启用 prefetch 特性，默认为 true
    },
  },
  fastRefresh: {},

  // layout: {}
});
