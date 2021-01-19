import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();
    async getNoteList(page: number, size: number) {
      const data = await this.noteDao.getNoteList(page,size);
      return data;
    }
    addNote(note: Types.Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Types.Note) {
    }

}
export default noteServeice;