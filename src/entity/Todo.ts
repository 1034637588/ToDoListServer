import * as Types from '../typeings';
import { Schema, Model, model } from 'mongoose';

const todoModel:Schema = new Schema({
    id:String,
    content:String,
    isdone:String
});

export const ToDoModel : Model<Types.Todo> = model( 'note',todoModel)
