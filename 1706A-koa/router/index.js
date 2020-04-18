const router = require('koa-router')();

//登录接口
const login  = require('../api/login')
router.post('/login/login',login)

//tab 接口
const tab  = require('../api/tab')
router.post('/tab/tab',tab)

//列表接口
const list  = require('../api/list')
router.get('/group/list',list)

//添加用户接口
const user = require('../api/user')
router.post('/list/add',user)

//删除用户接口
const deletes = require('../api/delete')
router.post('/list/delete',deletes)

//编辑用户接口
const edit = require('../api/edit')
router.post('/list/edit',edit)
module.exports = router

