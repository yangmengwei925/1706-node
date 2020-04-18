'use strict';

const Controller = require('egg').Controller;

class GradeController extends Controller{
  async list() {
    let data = await this.ctx.service.grade.list()
    this.ctx.body = {code:0,msg:'',data}
  }
  async add() {
    let res = await this.ctx.service.grade.add()
    if(res.affectedRows === 1){
        this.ctx.body = {code:0,msg:'添加成功'}
    }
  }
  async edit() {
    let res = await this.ctx.service.grade.edit()
    if(res.affectedRows === 1){
        this.ctx.body = {code:0,msg:'编辑成功'}
    }
  }
  async delete() {
    let res  = await this.ctx.service.grade.delete()
    let data = await this.ctx.service.grade.list()
    if(res.affectedRows === 1){
        this.ctx.body = {code:0,msg:'删除成功',data}
    }
  }
  //图标数据
  async bin() {
    //
    let res  = await this.ctx.service.grade.bin()

    //总人数res.length
    //理论成绩成才人数res.filter(item=>item.llgrade>89).length
    //理论不成才人数res.length -res.filter(item=>item.llgrade>89).length
    //理论成才率 res.filter(item=>item.llgrade>89).length/res.length

    let data = {
      ll_all :res.length,
      ll_is_person:res.filter(item=>item.llgrade>89).length,
      jn_is_person:res.filter(item=>item.jngrade>89).length,
      areas:[
        {value:res.filter(item=>item.jngrade>89).length, name:'>=90分'},
        {value:res.filter(item=>item.jngrade>80&&item.jngrade<90).length, name:'80-89分'},
        {value:res.filter(item=>item.jngrade<80).length, name:'<80分'}
    ]

    }

    this.ctx.body = {code:0,msg:'',data}
    
  }
}

module.exports = GradeController;
