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
todoRouter.post('/todo', (ctx) => {
});

// 删除todo
todoRouter.delete('/todo/:id', (ctx) => {
});

// 修改todo
todoRouter.put('/todo/:id', (ctx) => {
});

export default todoRouter