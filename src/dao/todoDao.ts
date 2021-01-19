import { ToDoModel } from '../entity/Todo'
import * as Types from '../typeings'
export class todoDao implements Types.todoDao {
    todoModel = ToDoModel;
    
    // 条件查询
    async getTodoListByContent(content: string) {
        try {
            const data: Array<Types.Todo> = await this.todoModel.find({
                content: new RegExp(`${content}`,'g')
            });
            return data;
        } catch (error) {
            return 0;
        }
    }

    async getTodoList(page: number, size: number) {
        try {
            const data: Array<Types.Todo> = await this.todoModel.find({}).skip((page - 1) * size).limit(size);
            return data;
        } catch (error) {
            return 0;
        }
    };

    async addTodo(todo: Types.Todo) {
        try {
            const noteIns = new this.todoModel(todo);
            const data: Types.Todo = await noteIns.save();
        } catch (error) {
            return 0;
        }
    };

    async deleteTodo(id: string) {
        try {
            const data = await this.todoModel.deleteOne({ _id: id });
            return data;
        } catch (error) {
            return 0;
        }
    };

    async updateTodo(id: string, todo: Types.Todo) {
        try {
            const data = await this.todoModel.updateOne({ _id: id }, todo);
            return data;
        } catch (error) {
            return 0;
        }
    };
}