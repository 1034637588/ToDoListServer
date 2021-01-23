import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();

    // 条件查询
    async getNoteListByContent(content: string) {
        const data = await this.noteDao.getNoteListByContent(content);
        return data;
    }

    async getNoteList(page: number, size: number) {
        const data = await this.noteDao.getNoteList(page, size);
        return data;
    }

    async getNoteById(id:string) {
        console.log('service');
        const data = await this.noteDao.getNoteById(id);
        return data;
    }
    async addNote(note: Types.Note) {
        const data = await this.noteDao.addNote(note);
        return data;
    }

    async deleteNote(id: string) {
        const data = await this.noteDao.deleteNote(id);
        return data;
    }

    async updateNote(id: string, note: Types.Note) {
        let data = await this.noteDao.updateNote(id, note);
        return data;
    }

}
export default noteServeice;