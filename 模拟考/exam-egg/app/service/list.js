const Service = require('egg').Service;

class ListService extends Service {
  async index() {
    return await this.app.mysql.select('user')
  }
  async delete(userid) {
    return await this.app.mysql.delete('user',{userid})
  }
  async edit(user,pwd,phone,role,userid) {
    return await this.app.mysql.update('user',{user,pwd,phone,role},{where: {userid}})
  }    
}

module.exports = ListService;