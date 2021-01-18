import Koa from 'koa';
import noteRouter from './controller/noteController';
import todoRouter from './controller/todoController';
import connect from './utils/dbconnect'
const app = new Koa();
connect(); // 建立mongodb连接
app.use(noteRouter.routes());
app.use(todoRouter.routes());
app.listen(3000,()=>{
    console.log('port 3000 start ....')
})