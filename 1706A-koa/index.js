const Koa        = require('koa')
const app        = new Koa();
const middleWare = require('./middleWare')
const router     = require('./router')

//中间件
middleWare(app)

//路由
app.use(router.routes())

app.listen(8080,()=>console.log('服务已开启'))


