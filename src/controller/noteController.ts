import Router from 'koa-router'
import { Result } from '../entity/Result';
import * as Types from '../typeings'
import noteServeice from '../serveice/noteService';
let noteRouter = new Router();
const serveice = new noteServeice();
// 获取分页数据
noteRouter.get('/note/:page/:size', async (ctx) => {
    const { page, size } = ctx.params;
    const date = await serveice.getNoteList(page, size);
    const result = new Result<Types.Note[]>(200, date, 'success');
    ctx.body = result;
});
// 新增note
noteRouter.post('/note', (ctx) => {
    // serveice.addNote();
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