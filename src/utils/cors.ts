import { Next, Context } from "koa";

export default async function (ctx: Context, next: Next) {
    ctx.set({
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": "PUT,POST,GET,DELETE,OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type,Content-Length, Authorization, Accept,X-Requested-With"
    });
    await next();
}