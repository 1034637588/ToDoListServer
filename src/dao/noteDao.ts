import { NoteModel } from '../entity/Note';
import * as Types from '../typeings';
import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;

export class noteDao implements Types.noteDao{
    noteModel=NoteModel
    async getNoteList(page: number, size: number) {
        await this.noteModel.find((err,res)=>{
            console.log(res,666)
            return res
        })
    }
    addNote(note: Types.Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Types.Note) {
    }
}