// import './index.css';

// 使用 html-webpack-plungin打出来的 index.html真的有点搞笑呢
// <script defer src="bundle.js"></script> 这个defer会让document.write失效

document.write(666);
document.write(666);
console.log("console还是可以打印的");
