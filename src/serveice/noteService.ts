import * as Types from "../typeings";
import { noteDao } from "../dao/noteDao";
import { Note } from "../entity/Note";

class noteServeice implements Types.noteServeice {
    noteDao = new noteDao();
    getNoteList(page: number, size: number) {
        return [new Note('','','')]
    }
    addNote(note: Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Note) {
    }

}
export default noteServeice;