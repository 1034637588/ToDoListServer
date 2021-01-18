
export interface Note{
    id:string;
    content:string;
    dates:string;
}

export interface Todo {
    id:string;
    isDone:boolean;
    content:string;
}

export interface Result<T>{
    status:number;
    data:T;
    message:string;
}

export interface noteServeice {
    getNoteList(page:number,size:number):Note[];
    addNote(note:Note):any;
    deleteNote(id:string):any;
    updateNote(id:string,note:Note):any;
}

export interface todoServeice {
    getTodoList(page:number,size:number):Todo[];
    addTodo(todo:Todo):any;
    deleteTodo(id:string):any;
    updateTodo(id:string,todo:Todo):any;
    updateIsDone(id:string,isDone:boolean):any
}

export interface noteDao {
    getNoteList(page:number,size:number):Note[];
    addNote(note:Note):any;
    deleteNote(id:string):any;
    updateNote(id:string,note:Note):any;
}

export interface todoDao {
    getTodoList(page:number,size:number):Todo[];
    addTodo(todo:Todo):any;
    deleteTodo(id:string):any;
    updateTodo(id:string,todo:Todo):any;
    updateIsDone(id:string,isDone:boolean):any
}


