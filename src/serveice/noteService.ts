import { Note } from "../entity/note";
import * as Types from "../typeings";
import { Result } from '../entity/Result';

class noteServeice implements Types.noteServeice {
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