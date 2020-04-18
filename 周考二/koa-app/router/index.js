const router = require('koa-router')();

//列表接口
const list = require('../api/list')
router.post('/list',list)




module.exports = router
