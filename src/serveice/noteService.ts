import { Note } from "../entity/note";
import * as Types from "../typeings";
import { Result } from '../entity/Result';

class noteServeice implements Types.noteServeice {
    getNoteList(page: number, size: number) {
        return new Result<Types.Note>(123, new Note('123','123','123'), '123')
    }
    addNote(note: Note) {
        return new Result<any>(123, '123', '123')
    }
    deleteNote(id: string) {
        return new Result<any>(123, '123', '123')
    }
    updateNote(id: string, note: Note) {
        return new Result<any>(123, '123', '123')
    }

}
export default noteServeice;