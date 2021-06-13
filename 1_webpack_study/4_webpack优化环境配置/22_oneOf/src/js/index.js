import '../css/index.css';
import '../css/index.less';
import studyResult from './study';

function add(x, y) {
  return x + y;
}

console.log('add result: ', add(1, 2));
console.log('studyResult: ', studyResult()); // 据说这么写之后，js可以热替换，非入口js文件可以
// 然而写不写下面，都是整体在刷新

if (module.hot) {
  // module.hot为true, 说明开启了HMR功能
  module.hot.accept('./study.js', () => {
    studyResult();
  });
}
