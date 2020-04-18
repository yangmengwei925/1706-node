const jwt        = require('jsonwebtoken')
const url        = require('url')

function verifyType(token,key){
    return new Promise(res=>{
    jwt.verify(token,key,(err,info)=>{
        if(!err){
            res(info)
            return
        }
    })
})
}

module.exports = options =>{
    
    return async function(ctx,next){
        //登录接口 是不需要做token 校验
        if(url.parse(ctx.url).pathname === '/login/login'){
            await next()
            return 
        }
        if(url.parse(ctx.url).pathname === '/register/re'){
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
        console.log(ctx.info)
        await next()
       
    }
}

