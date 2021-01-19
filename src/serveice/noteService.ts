import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();

    async getNoteList(page: number, size: number) {
      const data = await this.noteDao.getNoteList(page,size);
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
      let data = await this.noteDao.updateNote(id,note);
      return data;
    }

}
export default noteServeice;