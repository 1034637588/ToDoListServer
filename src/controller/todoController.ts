import Router from 'koa-router';
import { Result } from '../entity/Result';
import * as Types from '../typeings';
import { toDoService } from '../serveice/toDoService';
let todoRouter = new Router();
const serveice = new toDoService();

// 条件查询
todoRouter.get('/note/:content',async (ctx) => {
    const {content} = ctx.params;
    const data = await serveice.getTodoListByContent(content);
    if(data) {
        ctx.body = new Result<Types.Todo[]>(20000, data, 'success');
    } else {
        ctx.body = new Result<null>(20001, null, 'error');
    }
});

// 获取分页数据
todoRouter.get('/todo/:page/:size', async(ctx) => {
    const { page, size }= ctx.params;
    const data = await serveice.getTodoList(Number(page), Number(size));
    if(data) {
        ctx.body = new Result<Types.Todo[]>(20000, data, 'success');
    }else{
        ctx.body = new Result<any>(20001, null, 'success');
    }
});

// 新增todo
todoRouter.post('/todo', async(ctx) => {
    const body:Types.Todo = ctx.request.body;
    const data = await serveice.addTodo(body);
    if(data) {
        ctx.body = new Result<Types.Todo>(20000, data, 'success');
    } else {
        ctx.body = new Result<any>(20001, null, 'success');
    }
});

// 删除todo
todoRouter.delete('/todo/:id', async(ctx) => {
    const { id } = ctx.params;
    const data = await serveice.deleteTodo(id);
    if(data){
        ctx.body =new Result<any>(20000, data, 'success');
    }else{
        ctx.body =new Result<any>(20001, null, 'error');
    }
});

// 修改todo
todoRouter.put('/todo/:id', async(ctx) => {
    const { id } = ctx.params;
    const todo:Types.Todo = ctx.request.body;
    const data = await serveice.updateTodo(id,todo);
    if(data > 0) {
        ctx.body = new Result<Types.Todo>(20000, data, 'success');
    } else {
        ctx.body = new Result<any>(20001, null, 'error');
    }
});

export default todoRouter