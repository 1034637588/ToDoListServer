import { Note } from "../entity/Note";
import { Result } from "../entity/Result";

export interface noteServeice {
    getNoteList(page:number,size:number):Result<Note>;
    addNote(note:Note):Result<any>;
    deleteNote(id:string):Result<any>;
    updateNote(id:string,note:Note):Result<any>;
}