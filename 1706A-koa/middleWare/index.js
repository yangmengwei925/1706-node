const bodyParser = require('koa-bodyparser')()

const static     = require('koa-static')
const path       = require('path')
let st           = static(path.join(__dirname,'../public'))

let middleWare = app =>{
    app.use(bodyParser),
    app.use(st)   
}
module.exports = middleWare