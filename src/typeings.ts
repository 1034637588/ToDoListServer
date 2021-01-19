

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
    getNoteList(page: number, size: number): Promise<Note[]> | any;
    addNote(note: Note): Promise<Note[]> | any;
    deleteNote(id: string): Promise<Note[]> | any;
    updateNote(id: string, note: Note): Promise<Note[]> | any;
}

export interface todoServeice {
    todoDao: todoDao;
    getTodoList(page: number, size: number): Promise<Todo[]> | any;
    addTodo(todo: Todo): Promise<Todo[]> | any;
    deleteTodo(id: string): Promise<Todo[]> | any;
    updateTodo(id: string, todo: Todo): Promise<Todo[]> | any;
}

export interface noteDao {
    noteModel: Model<Note>;
    getNoteList(page: number, size: number): Promise<Note[]> | any;
    addNote(note: Note): Promise<Note[]> | any;
    deleteNote(id: string): Promise<Note[]> | any;
    updateNote(id: string, note: Note): Promise<Note[]> | any;
}

export interface todoDao {
    todoModel: Model<Todo>;
    getTodoList(page: number, size: number): Promise<Todo[]> | any;
    addTodo(todo: Todo): Promise<Todo[]> | any;
    deleteTodo(id: string): Promise<Todo[]> | any;
    updateTodo(id: string, todo: Todo): Promise<Todo[]> | any;
}


