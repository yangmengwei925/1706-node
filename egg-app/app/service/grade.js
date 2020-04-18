const Service = require('egg').Service;

class GradeService extends Service {

  async list() {
    const {app} = this
    return await app.mysql.select('grade')
  }
  async add() {
    const {app} = this
    let {name,llgrade,ll_is,jngrade,jn_is}   = this.ctx.request.body

    let operoName  = this.ctx.info.realname
    let time       = this.getTime()

    return await app.mysql.insert('grade',{name,llgrade,ll_is,jngrade,jn_is,time,operoName})
  }

  async edit(){
    const {app} = this
    let {name,llgrade,ll_is,jngrade,jn_is,id}   = this.ctx.request.body

    let operoName  = this.ctx.info.realname
    let time       = this.getTime()
    return await app.mysql.update('grade',{id,name,llgrade,ll_is,jngrade,jn_is,time,operoName})
  }
  async delete(){
    const {app,ctx} = this
    return await app.mysql.delete('grade',{id:ctx.request.body.id})
  }
  getTime(){
    let getDate    = new Date()
    let YYYY       = getDate.getFullYear();
    let MM         = getDate.getMonth()+1;
    let DD         = getDate.getDate();
    return YYYY+'-'+MM+'-'+DD; 
  }

  async bin(){
    const {app,ctx} = this
    return await app.mysql.select('grade',{where:{time:this.getTime()}})
  }
}

module.exports = GradeService;