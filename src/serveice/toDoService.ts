import { Result } from "../entity/Result";
import { Todo } from "../entity/todo";
import * as Types from "../typeings";
export class toDoService implements Types.todoServeice{
    getTodoList(page:number,size:number){
        return new Result<Types.Todo>(123, new Todo('123','123',true),'123')
    };
    addTodo(todo:Types.Todo){
        return new Result<any>(123, '123', '123')
    };
    deleteTodo(id:string){
        return new Result<any>(123, '123', '123')
    };
    updateTodo(id:string,todo:Types.Todo){
        return new Result<any>(123, '123', '123')
    };
    updateIsDone(id:string,isDone:boolean){
        return new Result<any>(123, '123', '123')
    }
}