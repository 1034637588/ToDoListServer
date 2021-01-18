import * as Types from '../typeings';
import { Schema, Model, model } from 'mongoose';

const noteModel:Schema = new Schema({
    id:String,
    content:String,
    dates:String
});

export const NoteModel : Model<Types.Note> = model( 'note',noteModel)
