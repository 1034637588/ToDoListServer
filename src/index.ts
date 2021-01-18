import Koa from 'koa';
import noteRouter from './controller/noteController';
import todoRouter from './controller/todoController'
const app = new Koa();

app.use(noteRouter.routes());
app.use(todoRouter.routes());

app.listen(3000,()=>{
    console.log('port 3000 start ....')
})