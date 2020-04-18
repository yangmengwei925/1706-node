const sq         = require('../mysql');
const returnData = require('../until')


module.exports = async (ctx,next)=>{
    const {userId,pass,realname,age,phone,sex,role,isDog} = ctx.request.body
  
    let res         = await sq(`UPDATE user SET pass='${pass}',realname='${realname}',age='${age}',phone='${phone}',sex='${sex}',role='${role}',isDog='${isDog}' where userId='${userId}'`)
    if(res.insertId === 0){
        let data    = await sq(`SELECT * FROM user`)
        ctx.body    = returnData(0,'编辑成功',data)
    }
    
}