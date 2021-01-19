import { ToDoModel } from '../entity/Todo'
import * as Types from '../typeings'
export class todoDao implements Types.todoDao {
    todoModel = ToDoModel;
    async getTodoList(page:number,size:number){
        const data:Array<Types.Todo> = await this.todoModel.find({}).skip((page - 1) * size).limit(size);
        return data;
    };
    async addTodo(todo:Types.Todo){
        const noteIns = new this.todoModel(todo);
        const data = await noteIns.save();
        return data;
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