
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
    getNoteList(page:number,size:number):Result<Note>;
    addNote(note:Note):Result<any>;
    deleteNote(id:string):Result<any>;
    updateNote(id:string,note:Note):Result<any>;
}

export interface todoServeice {
    getTodoList(page:number,size:number):Result<Todo>;
    addTodo(todo:Todo):Result<any>;
    deleteTodo(id:string):Result<any>;
    updateTodo(id:string,todo:Todo):Result<any>;
    updateIsDone(id:string,isDone:boolean):Result<any>
}


