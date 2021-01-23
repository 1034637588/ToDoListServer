

import { Schema, Model, model, Document } from 'mongoose';
export interface Note extends Document {
    _id?: string;
    content: string;
    dates: string;
}

export interface Todo extends Document{
    _id?: string;
    isdone: boolean;
    content: string;
}

export interface Result<T> {
    status: number;
    data: T;
    message: string;
}

export interface noteServeice {
    noteDao: noteDao;
    getNoteListByContent(content:string): Promise<Note[]> | any;
    getNoteList(page: number, size: number): Promise<Note[]> | any;
    getNoteById(id:string):Promise<Note> | any;
    addNote(note: Note): Promise<Note[]> | any;
    deleteNote(id: string): Promise<Note[]> | any;
    updateNote(id: string, note: Note): Promise<Note[]> | any;
}

export interface todoServeice {
    todoDao: todoDao;
    getTodoListByContent(content:string): Promise<Todo[]> | any;
    getTodoList(page: number, size: number): Promise<Todo[]> | any;
    addTodo(todo: Todo): Promise<Todo[]> | any;
    deleteTodo(id: string): Promise<Todo[]> | any;
    updateTodo(id: string, todo: Todo): Promise<Todo[]> | any;
}

export interface noteDao {
    noteModel: Model<Note>;
    getNoteListByContent(content:string): Promise<Note[]> | any;
    getNoteList(page: number, size: number): Promise<Note[]> | any;
    getNoteById(id:string):Promise<Note> | any;
    addNote(note: Note): Promise<Note[]> | any;
    deleteNote(id: string): Promise<Note[]> | any;
    updateNote(id: string, note: Note): Promise<Note[]> | any;
}

export interface todoDao {
    todoModel: Model<Todo>;
    getTodoListByContent(content:string): Promise<Todo[]> | any;
    getTodoList(page: number, size: number): Promise<Todo[]> | any;
    addTodo(todo: Todo): Promise<Todo[]> | any;
    deleteTodo(id: string): Promise<Todo[]> | any;
    updateTodo(id: string, todo: Todo): Promise<Todo[]> | any;
}


