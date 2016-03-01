export interface ITask{
    completed : boolean;
    createAt: number;
    key?: string;
    title: string;
}

export class Task implements ITask{
    completed : boolean= false;
    createAt: number = Firebase.ServerValue.TIMESTAMP;
    title: string;
    
    constructor(title : string){
        this.title = title;
    }
}