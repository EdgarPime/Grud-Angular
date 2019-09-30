import { Injectable } from '@angular/core';
import { Task } from '../models/task';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  tasks: Task[];
  public indice:number;
  public mostrar:boolean=false;

  constructor() {
    this.tasks= [
      // {title: 'write', description: 'i have to write'},
      // {title: 'write', description: 'i have to write'}
    ];

    this.indice;
   }

  
   
   getTask(){
      if(localStorage.getItem('tasks')===null){
        return this.tasks;
      }else
      {
        this.tasks= JSON.parse(localStorage.getItem('tasks'));
        return this.tasks
      }
     
   }

   addTask(task: Task) {
     this.tasks.push(task);
    let tasks= [];
      if (localStorage.getItem('tasks')===null){
        this.tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
     }else {
       tasks=JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }
      
      
      
   }

   removeTask(task: Task) {
     for(let i = 0; i < this.tasks.length; i++){
       if(task== this.tasks[i]){
         this.tasks.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(this.tasks));
       }
     }
   }

   searchTask(task:Task) {
    for(let i = 0; i < this.tasks.length; i++){
      if(task== this.tasks[i]){
        this.indice=i;;
      }
    }
   }

   updateTask(i:number, task:Task){
     this.tasks[i]=(task);
     localStorage.setItem('tasks', JSON.stringify(this.tasks));
   }
}
