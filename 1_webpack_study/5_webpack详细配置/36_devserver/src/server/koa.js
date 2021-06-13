const Koa = require('koa');
const app = new Koa();
app.listen(3006);

// 允许跨域，mock本地接口
// var cors = require('koa2-cors');
// app.use(cors({
//     origin: function (ctx) {
//         return '*'  // 允许来自所有域名请求
//        // return 'http://localhost:8080'; / 这样就能只允许 http://localhost:8080 这个域名的请求了
//     },
//     exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
//     maxAge: 5,
//     credentials: true,
//     allowMethods: ['GET', 'POST', 'DELETE', 'OPTIONS', 'PUT'],
//     allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
// }));

//路由处理
const router = require('koa-router')(); 
app.use(router.routes());
const fs = require('fs');






//  -------------------      get请求区    -------------------------------
router.get('/', async (ctx, next) => {
    ctx.response.body = '666';
});

router.get('/app1/service/list', async (ctx, next) => {
    let data = fs.readFileSync('jsons/list.json');
    ctx.response.body = data.toString();
});


//  -------------------      post请求区    -------------------------------
router.post('/signin', async (ctx, next) => {
    let data =  fs.readFileSync('jsons/signin.json');
    ctx.response.body = data.toString();
});
