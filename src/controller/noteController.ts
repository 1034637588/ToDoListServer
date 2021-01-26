import Router from 'koa-router'
import { Result } from '../entity/Result';
import * as Types from '../typeings'
import noteServeice from '../serveice/noteService';
let noteRouter = new Router();
const serveice = new noteServeice();

// 条件查询
noteRouter.get('/note/content/:content',async (ctx) => {
    const {content} = ctx.params;
    const data = await serveice.getNoteListByContent(content);
    if(data) {
        ctx.body = new Result<Types.Note[]>(20000, data, 'success');
    } else {
        ctx.body = new Result<null>(20001, null, 'error');
    }
});

// 获取分页数据
noteRouter.get('/note/page/:page/:size', async (ctx) => {
    const { page, size }= ctx.params;
    const data = await serveice.getNoteList(Number(page), Number(size));
    if(data) { // 判断是否成功
        ctx.body = new Result<Types.Note[]|number>(20000, data, 'success');
    } else {
        ctx.body =  new Result<null>(20001, null, 'error');
    }
});

// 根据id查询
noteRouter.get('/note/id/:id', async (ctx) => {
    const { id }= ctx.params;
    const data = await serveice.getNoteById(id);
    if(data) { // 判断是否成功
        ctx.body = new Result<Types.Note|number>(20000, data, 'success');
    } else {
        ctx.body =  new Result<null>(20001, null, 'error');
    }
});
// 新增note
noteRouter.post('/note',async (ctx) => {
    const note:Types.Note = ctx.request.body;
    const data = await serveice.addNote(note);
    if(data) {
        ctx.body = new Result<Types.Note>(20000, data, 'success');
    } else {
        ctx.body = new Result<null>(20001, null, 'error');
    }
});

// 删除note
noteRouter.delete('/note/:id', async(ctx) => {
    const { id } = ctx.params;
    const data = await serveice.deleteNote(id);
    if(data){
        ctx.body =new Result<any>(20000, data, 'success');
    }else{
        ctx.body =new Result<any>(20001, null, 'error');
    }
});

// 修改note
noteRouter.put('/note/:id', async(ctx) => {
    const { id } = ctx.params;
    const note:Types.Note = ctx.request.body;
    const data = await serveice.updateNote(id,note);
    if(data) {
        ctx.body = new Result<Types.Note>(20000, data, 'success');
    } else {
        ctx.body = new Result<any>(20001, null, 'error');
    }
});


export default noteRouter