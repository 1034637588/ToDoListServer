import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();
    async getNoteList(page: number, size: number) {
      const data = await this.noteDao.getNoteList(page,size);
      return data;
    }
    async addNote(note: Types.Note) {
       const meg = await this.noteDao.addNote(note);
       return meg;
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Types.Note) {
    }

}
export default noteServeice;