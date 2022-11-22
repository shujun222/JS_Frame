const Koa = require('koa');
const app = new Koa();
app.listen(3006);

const router = require('koa-router')();

//controller：数据接口
router.get("/api/service/getUser", async ctx => {
        const data = { "name": "唐三", "props": "蓝银草&昊天锤" }
        ctx.response.body = data;
    })
    .get("/api/service/getSkills", ctx => {
        ctx.response.body = 'data=["缠绕", "寄生", "蛛网束缚", "蓝银囚笼"]'
    })

    
// 后端允许跨域:  https://www.npmjs.com/package/koa2-cors
var cors = require('koa2-cors');
app.use(cors({
    origin: "*",
    // origin: "http://localhost:8081",
    maxAge: 300,

    allowMethods: [ 'PUT'],
    allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
}));

app.use(router.routes());


