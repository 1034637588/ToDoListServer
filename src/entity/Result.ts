import * as Types from '../typeings';

export class Result<T> implements Types.Result<T>{
    status:number;
    data:T;
    message:string;
    constructor(status:number,data:T,message:string){
        this.status = status;
        this.data = data;
        this.message = message
    }

}