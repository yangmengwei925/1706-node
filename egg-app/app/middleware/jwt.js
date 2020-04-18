const jwt        = require('jsonwebtoken')
const url        = require('url')

function verifyType(token,key){
    return new Promise((res,rej)=>{
    jwt.verify(token,key,(err,info)=>{
        if(!err){
            res(info)
            return
        }
        rej(err)
    })
})
}

module.exports = options =>{
    
    return async function(ctx,next){
        //登录接口 是不需要做token 校验
        if(url.parse(ctx.url).pathname === '/login/login'){
            console.log(ctx.request.body.user+'登录')
            await next()
            return 
        }
       
        const token  = ctx.get('authorToken')
       
        if(!token){
            ctx.body = {code:444,msg:'没有权限，请登录'}
            return 
        }
        let info ={}
        try{
            info = await verifyType(token,ctx.app.config.keys)
            
        }catch(err){
            ctx.body = {code:444,msg:'权限鉴定失败'}
            return 
        }

        
        ctx.info = info
        console.log(ctx.info.realname+'操作界面')
        await next()
       
    }
}

