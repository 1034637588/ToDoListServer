import * as Types from '../typeings';
import { Schema, Model, model } from 'mongoose';

const todoModel:Schema = new Schema({
    content:String,
    isdone:Boolean
});

export const ToDoModel : Model<Types.Todo> = model( 'todolists',todoModel)
