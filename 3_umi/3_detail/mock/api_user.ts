export default {
    // 支持值为 Object 和 Array
    'GET /api/users': [
        { name: '李健', age: 32 },
        { name: '梅西', age: 34 },
        { name: 'C罗', age: 36 },
        { name: '莱万多夫斯基', age: 32 },
      ],
  
    // GET 可忽略
    '/api/users': { id: 1 },
  
    // 支持自定义函数，API 参考 express@4
    'POST /api/users/create': (req, res) => {
      // 添加跨域请求头
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.end('ok');
    },
  }