import * as Types from '../typeings';
export class Note implements Types.Note{
    id: string;
    content: string;
    dates: string;
    constructor(id:string, content:string, dates:string) {
        this.id = id;
        this.content = content;
        this.dates = dates;
    }
}