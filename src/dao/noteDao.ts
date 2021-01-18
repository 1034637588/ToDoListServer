import { Note } from '../entity/note'
import * as Types from '../typeings'
export class noteDao implements Types.noteDao{
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