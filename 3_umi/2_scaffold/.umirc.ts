import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  layout: {},
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  //   // { path: '/', redirect: '/user' },
  //   { path: '/user', component: '@/pages/user' },
  //   { path: '/list', component: '@/pages/list' },
  // ],
  fastRefresh: {},
});
