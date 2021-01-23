import { NoteModel } from '../entity/Note';
import * as Types from '../typeings';
import mongoose, { Model } from 'mongoose';
const Schema = mongoose.Schema;

export class noteDao implements Types.noteDao {
    noteModel = NoteModel

    // 条件查询
    async getNoteListByContent(content: string) {
        try {
            const data: Array<Types.Note> = await this.noteModel.find({
                content: new RegExp(`${content}`,'g')
            });
            return data;
        } catch (error) {
            return 0;
        }
    }

    // 分页查询
    async getNoteList(page: number, size: number) {
        try {
            const data: Array<Types.Note> = await this.noteModel.find({}).skip((page - 1) * size).limit(size);
            return data;
        } catch (error) {
            return 0;
        }
    }

    // id查询
    async getNoteById(id:string){
        try {
            const data:Types.Note = await this.noteModel.findById(id);
            return data;
        } catch (error) {
            return 0;
        }
    }

    // 新增note
    async addNote(note: Types.Note) {
        try {
            const noteIns = new this.noteModel(note);
            const data = await noteIns.save();
            return data;
        } catch (error) {
            return 0;
        }
    }

    // 删除数据
    async deleteNote(id: string) {
        try {
            const data = await this.noteModel.deleteOne({ _id: id });
            return data;
        } catch (error) {
            return 0;
        }
    }

    // 更新数据
    async updateNote(id: string, note: Types.Note) {
        try {
            const data = await this.noteModel.updateOne({ _id: id }, note);
            return data;
        } catch (error) {
            return 0;
        }
    }
}