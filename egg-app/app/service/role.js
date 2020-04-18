const Service = require('egg').Service;

class RoleService extends Service {
  async index() {
    const {ctx,app} = this
    return await app.mysql.select('role',{where:{rolename:ctx.info.role}})
  }

  
  async list(){
    return await this.app.mysql.select('role')
  }
  
}

module.exports = RoleService;