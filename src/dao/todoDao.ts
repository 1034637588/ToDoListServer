import { ToDoModel } from '../entity/Todo'
import * as Types from '../typeings'
export class todoDao implements Types.todoDao {
    todoModel = ToDoModel;
    getTodoList(page:number,size:number){
        return [ ]
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