
const Controller = require('egg');

class LoginController extends Controller.Controller {
  async list() {
      let res  = await this.service.role.list()
      let oprs  = await this.service.opr.list()
      //菜单数据
     let data = []
     res.forEach(item=>{

        let index = data.findIndex(k=>k.rolename ===item.rolename )
        if(index!==-1){
          data[index].tab.push(item.tab_queen)
          return 
        }

        data.push({
          rolename:item.rolename,
          role:item.role,
          tab:[item.tab_queen]
        })
     })

    //加入权限数据
    let arr = []
      data.forEach(j => {
        oprs.forEach(i=>{
          if(j.rolename === i.role) {
              arr.push(i.type)
              j.opr = [...arr]
          }
      }) 
      arr = []
    })
     
      this.ctx.body = {code:0,msg:'',data}
  }
}

module.exports = LoginController;



