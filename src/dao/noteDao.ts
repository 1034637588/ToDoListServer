import { NoteModel } from '../entity/Note';
import * as Types from '../typeings';
import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;

export class noteDao implements Types.noteDao{
    noteModel=NoteModel
    // 分页查询
    async getNoteList(page: number, size: number) {
       const data:Array<Types.Note> =  await this.noteModel.find({}).skip((page - 1) * size).limit(size);
       return data;
    }
    addNote(note: Types.Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Types.Note) {
    }
}