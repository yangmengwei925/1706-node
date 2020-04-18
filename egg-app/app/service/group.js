const Service = require('egg').Service;

class GroupService extends Service {

  async list() {
    const {app} = this
    return await app.mysql.select('user')
  }
  async add() {
    const {app,ctx} = this
    //拿到要添加的数据
    console.log(ctx.request.body)
    const {user,pass,realname,phone,sex,role} = ctx.request.body
    //返回添加结果
    return await app.mysql.insert('user',{user,pass,realname,phone,sex,role,userId:null})
  }

  async edit(){
    const {app,ctx} = this
    //拿到要更新的数据
    const {pass,realname,phone,sex,role,userId} = ctx.request.body
    //返回更新结果
    return await app.mysql.update('user',{pass,realname,phone,sex,role},{where: {userId}})
  }
  async delete(){
    const {app,ctx} = this
    //拿到要删除的数据Id
    const {userId} = ctx.request.body

    //返回删除结果
    return await app.mysql.delete('user',{userId:userId})
  }
}

module.exports = GroupService;