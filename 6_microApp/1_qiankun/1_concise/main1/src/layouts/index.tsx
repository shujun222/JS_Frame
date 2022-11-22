import React, { useMemo } from 'react';
import { Link, useLocation, MicroApp, Route } from 'umi';
import MainIndex from '../pages/index'

const APP_LIST = [
  {
    name: 'app1',
    path: '/app1',
  },
  {
    name: 'app2-没有配置qiankun',
    path: '/app2',
  },
  {
    name: 'app3 - server命令',
    path: '/app3'
  },
  {
    name: 'umijs官网',
    path: '/umijs'
  }
]

const Layout: React.VFC = () => {
  const location = useLocation();
  const pathname = location.pathname;

  const app = useMemo(() => {
    const app = APP_LIST.find(item => item.path === pathname);
    return app;
  }, [pathname]);

  const hasApp = () => {
    return Boolean(app?.name);
  };


  return (
    <div style={{display: 'flex'}}>
      {/* 1. 左侧导航栏 */}
      <div style={{ width: '250px', height: '100%', borderRight: 'solid gray' }}>
        <Link to="/index">主应用首页</Link>
        {APP_LIST.map(app => (
          <div key={app.name}>
            <Link to={app.path}>{app.name}</Link>
          </div>
        ))}
      </div>

      {/* 内容区 */}
      <div>
        <Route path="/index" component={MainIndex} />

        {hasApp() && <MicroApp name={app?.name} autoSetLoading />}
      </div>

    </div>
  );
};

export default Layout;
