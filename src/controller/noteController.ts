import Router from 'koa-router'
import { Result } from '../entity/Result';
import * as Types from '../typeings'
import noteServeice from '../serveice/noteService';
let noteRouter = new Router();
const serveice = new noteServeice();
// 获取分页数据
noteRouter.get('/note/:page/:size', async (ctx) => {
    const { page, size }= ctx.params;
    const data = await serveice.getNoteList(Number(page), Number(size));
    const result = new Result<Types.Note[]>(20000, data, 'success');
    ctx.body = result;
});
// 新增note
noteRouter.post('/note',async (ctx) => {
    const body:Types.Note = ctx.request.body;
    const data = await serveice.addNote(body);
    let result:Types.Result<Types.Note>;
    if(data) {
        result = new Result<Types.Note>(20000, data, 'success');
    } else {
        result = new Result<any>(20001, 'insert error', 'success');
    }
    ctx.body = result;
});

// 删除note
noteRouter.delete('/note/:id', (ctx) => {
    // serveice.deleteNote();
});

// 修改note
noteRouter.put('/note/:id', (ctx) => {
    // serveice.updateNote();
});


export default noteRouter