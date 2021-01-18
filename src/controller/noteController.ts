import Router from 'koa-router'
import noteServeice from '../serveice/noteservice';
let noteRouter = new Router();
const serveice = new noteServeice();
// 获取分页数据
noteRouter.get('/note/:page/:size', (ctx) => {
    // serveice.getNoteList()
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