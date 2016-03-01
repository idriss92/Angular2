import {ITask, Task} from './task';
import {Injectable} from 'angular2/core';



@Injectable()
export class TaskService{
    constructor(private ref: Firebase){
        
    }
    
    createTask(title:string): void{
        this.ref.push(new Task(title),(error : Error) => {
            if(error){
                console.error("Error @ createTask : ", error);
            }
        });
    }
    
    deleteTask(task:ITask): void{
        this.ref.child(task.key).remove((error : Error) => {
           if(error){
               console.error('Error @ deleteTask : ',error);
           } 
        });
    }
    
    updateTask(task:ITask, changes: any): void{
        this.ref.child(task.key).update(changes,(error : Error) => {
           if(error){
               console.error('Error @ updateTask : ',error);
           } 
        });
    }
}