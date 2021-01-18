import Router from 'koa-router'
let todoRouter = new Router();
// 获取分页数据
todoRouter.get('/todo/:page/:size', (ctx) => {
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