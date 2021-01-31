import { Context, Next } from "koa"

const catchError = async (ctx:Context,next:Next)=>{
    try{
        await next()
    } catch(error){
        if(error.errorCode){
            console.log('捕获到错误')
            return ctx.body = error.msg
        }
    }
}

export default catchError;