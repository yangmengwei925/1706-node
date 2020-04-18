const url = require('url')

module.exports=options=>{
    return async function(ctx,next){

        //先判断是否是登录页
        if(url.parse(ctx.url).pathname === '/login/login'){
            await next()
            return 
        }

        if(url.parse(ctx.url).pathname === '/re/re'){
            await next()
            return 
        }

        const sessionID = ctx.get('sessionId')
        
        let index = Object.keys(options).findIndex(item=>item === sessionID)

        if(index===-1||!sessionID){
            ctx.body = {code:555,msg:'您无权进行该操作'}
            return 
        }
        ctx.sessionInfo = options[sessionID]

        await next()
    }
}