import { Result } from "../entity/Result";
import { Todo } from "../entity/todo";
import * as Types from "../typeings";
export class toDoService implements Types.todoServeice{
    getTodoList(page:number,size:number){
        return [ new Todo('','',true)]
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