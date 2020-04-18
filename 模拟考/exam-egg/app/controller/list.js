
const Controller = require('egg').Controller;

class ListController extends Controller{
  async index() {
    const {service,ctx} = this
    let data  = await service.list.index()
    ctx.body  = {code:0,msg:'',data}
  }
  async edit() {
    const {service,ctx}         = this
    const {user,pwd,phone,role,userid} = ctx.request.body

    //判断当前角色是否有编辑权限
    let res = await service.opr.index(ctx.info.role)
    if(!res.some(item=>item.type === 'edit')){
       ctx.body  = {code:1,msg:'您无权进行修改'}
       return
    }

    //修改数据库
    await service.list.edit(user,pwd,phone,role,userid)
    ctx.body  = {code:0,msg:'修改成功'}
  }
  
  async delete() {
    const {service,ctx} = this

    //判断当前角色是否有删除权限
    let res = await service.opr.index(ctx.info.role)
    if(!res.some(item=>item.type === 'delete')){
      ctx.body  = {code:1,msg:'您无权进行删除'}
      return
   }
    //执行删除
    await service.list.delete(ctx.request.body.userid)
    
    //返回最新列表数据
    let data = await service.list.index()
    ctx.body = {code:0,msg:'删除成功',data}
  }
}

module.exports = ListController;



