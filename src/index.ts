import Koa from 'koa';
import noteRouter from './controller/noteController';
import todoRouter from './controller/todoController';
import connect from './utils/dbconnect';
import bodyParser from 'koa-bodyparser';
import cors from './utils/cors';
import { Result } from './entity/Result';
const app = new Koa();
connect(); // 建立mongodb连接
// 添加全局异常处理
app.use(async (ctx, next) => {
    try {
      await next()
    } catch (error) {
      ctx.body = new Result<null>(20001, null, 'error');
    }
});
app.use(cors);
app.use(bodyParser());
app.use(noteRouter.routes());
app.use(todoRouter.routes());
app.listen(3000,()=>{
    console.log('port 3000 start ....')
});