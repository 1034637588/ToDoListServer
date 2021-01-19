import { todoDao } from "../dao/todoDao";
import * as Types from "../typeings";
export class toDoService implements Types.todoServeice{
    todoDao = new todoDao();
    async getTodoList(page:number,size:number){
        const data = await this.todoDao.getTodoList(page,size);
        return data;
    };
    async addTodo(todo:Types.Todo){
       const meg = await this.todoDao.addTodo(todo);
       return meg;
    };
    async deleteTodo(id:string){
        const data = await this.todoDao.deleteTodo(id);
        return data;
    };
    async updateTodo(id:string,todo:Types.Todo){
        let data = await this.todoDao.updateTodo(id,todo);
        return data;
    };

}