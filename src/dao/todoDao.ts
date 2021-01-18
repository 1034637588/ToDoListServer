import { Todo } from '../entity/Todo'
import * as Types from '../typeings'
export class todoDao implements Types.todoDao {
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