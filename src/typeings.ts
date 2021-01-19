

import { Schema, Model, model, Document } from 'mongoose';
export interface Note extends Document {
    _id: string;
    content: string;
    dates: string;
}

export interface Todo extends Document{
    _id: string;
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
    getNoteList(page: number, size: number): Promise<Note[]>;
    addNote(note: Note): any;
    deleteNote(id: string): any;
    updateNote(id: string, note: Note): any;
}

export interface todoServeice {
    todoDao: todoDao;
    getTodoList(page: number, size: number): Promise<Todo[]>;
    addTodo(todo: Todo): any;
    deleteTodo(id: string): any;
    updateTodo(id: string, todo: Todo): any;
    updateIsDone(id: string, isDone: boolean): any
}

export interface noteDao {
    noteModel: Model<Note>;
    getNoteList(page: number, size: number): Promise<Note[]>;
    addNote(note: Note): any;
    deleteNote(id: string): any;
    updateNote(id: string, note: Note): any;
}

export interface todoDao {
    todoModel: Model<Todo>;
    getTodoList(page: number, size: number): Promise<Todo[]>;
    addTodo(todo: Todo): any;
    deleteTodo(id: string): any;
    updateTodo(id: string, todo: Todo): any;
    updateIsDone(id: string, isDone: boolean): any
}


