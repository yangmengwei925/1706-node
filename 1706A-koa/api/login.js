const sq         = require('../mysql');
const returnData = require('../until')

module.exports = async (ctx,next)=>{
    const {user,pwd} = ctx.request.body  
    
    let data = await sq(`SELECT user,pass,role,userId FROM user where user='${user}'`)

    if( data.length === 0 ) {
        ctx.body    = returnData(501,'账户不存在')
        return 
    }

    let ind = data.findIndex(item=>item.pass === pwd)
    if(ind!==-1 ) 
    { 
        ctx.body  = returnData(0,'登录成功',data[ind])
        return
    }

    ctx.body  = returnData(502,'密码错误')
     
}