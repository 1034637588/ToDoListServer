import { Next, Context } from "koa";

export default async function (ctx: Context, next: Next) {
    let method = ctx.method;
    ctx.set({
        "Access-Control-Allow-Origin": '*',
        "Content-Type": "application/json;charset=utf-8",
        "Access-Control-Allow-Methods":"*",
        "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    });
    if(method === 'OPTIONS') { // 处理非简单请求
        ctx.status = 200;
        ctx.body = ""
    }
    await next();
}