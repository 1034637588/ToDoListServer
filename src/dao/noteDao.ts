import { Note } from '../entity/Note'
import * as Types from '../typeings'
export class noteDao implements Types.noteDao{
    getNoteList(page: number, size: number) {
        return [new Note('','','')]
    }
    addNote(note: Types.Note) {
    }
    deleteNote(id: string) {
    }
    updateNote(id: string, note: Note) {
    }
}