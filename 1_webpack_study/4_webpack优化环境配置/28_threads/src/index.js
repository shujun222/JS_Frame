// import '@babel/polyfill';

const add = (x, y) => (x + y);

// eslint-disable-next-line
console.log("result: " , add(1,2));

// 虽然搞不太清楚promize的用法，但是依旧依葫芦画瓢
const promize = new Promise(resolve => {
    setTimeout(() => {
        console.log("定时器执行完了 ~");
        resolve();
    }, 2000);
});

console.log(promize);
