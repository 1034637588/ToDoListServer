import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();
    getNoteList(page: number, size: number) {
        this.noteDao.getNoteList(1,2);
        return []
    }
    addNote(note: Types.Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Types.Note) {
    }

}
export default noteServeice;