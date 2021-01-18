import Router from 'koa-router'
let noteRouter = new Router();
// 获取分页数据
noteRouter.get('/note/:page/:size', (ctx) => {
});
// 新增note
noteRouter.post('/note', (ctx) => {
});

// 删除note
noteRouter.delete('/note/:id', (ctx) => {
});

// 修改note
noteRouter.put('/note/:id', (ctx) => {
});


export default noteRouter