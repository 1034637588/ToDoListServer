import Router from 'koa-router';
import { Result } from '../entity/Result';
import * as Types from '../typeings';
import { toDoService } from '../serveice/toDoService';
let todoRouter = new Router();
const serveice = new toDoService();
// 获取分页数据
todoRouter.get('/todo/:page/:size', async(ctx) => {
    const { page, size }= ctx.params;
    const data = await serveice.getTodoList(Number(page), Number(size));
    const result = new Result<Types.Todo[]>(20000, data, 'success');
    ctx.body = result;
});
// 新增todo
todoRouter.post('/todo', async(ctx) => {
    const body:Types.Todo = ctx.request.body;
    const data = await serveice.addTodo(body);
    let result:Types.Result<Types.Todo>;
    if(data) {
        result = new Result<Types.Todo>(20000, data, 'success');
    } else {
        result = new Result<any>(20001, 'insert error', 'success');
    }
    ctx.body = result;
});

// 删除todo
todoRouter.delete('/todo/:id', (ctx) => {
});

// 修改todo
todoRouter.put('/todo/:id', (ctx) => {
});

export default todoRouter