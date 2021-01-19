import { todoDao } from "../dao/todoDao";
import * as Types from "../typeings";
export class toDoService implements Types.todoServeice{
    todoDao = new todoDao();
    async getTodoList(page:number,size:number){
        const data = await this.todoDao.getTodoList(page,size);
        return data;
    };
    addTodo(todo:Types.Todo){
        return ''
    };
    deleteTodo(id:string){
        return ''
    };
    updateTodo(id:string,todo:Types.Todo){
        return ''
    };
    updateIsDone(id:string,isDone:boolean){
        return ''
    }
}