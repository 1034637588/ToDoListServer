import * as Types from '../typeings';
export class Todo implements Types.Todo{
    id: string;
    content: string;
    isDone: boolean;
    constructor(id:string, content:string, isDone:boolean) {
        this.id = id;
        this.content = content;
        this.isDone = isDone;
    }
}