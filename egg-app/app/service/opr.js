const Service = require('egg').Service;

class OprService extends Service {
  async list() {
    const {ctx,app} = this
    return await app.mysql.select('opr',{where:{role:ctx.info.role}})
  }
  async list(){
    return await this.app.mysql.select('opr')
  }
  
}

module.exports = OprService;