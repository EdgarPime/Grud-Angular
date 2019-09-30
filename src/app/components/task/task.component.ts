import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { DataService } from '../../services/data.service';
import { TaskAddComponent } from '../task-add/task-add.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Output() eventClicked = new EventEmitter<Task>();

 
  i:number

  constructor(public dataService: DataService ) { }
  ngOnInit() {
  }

  onClick(task: Task) {
    this.eventClicked.emit(task);
    console.log(task)
    
  }

  removeTask(task: Task) {
    if(confirm('Estas seguro de eliminarlo')){
      this.dataService.removeTask(task);

    }
    
  }

  searchTask(task: Task){
    if(confirm('Estas seguro de actualizarlo')){
      this.dataService.searchTask(task);
      // console.log(this.dataService.indice)
      this.dataService.mostrar=false;
      // console.log(this.dataService.mostrar)
    }
    
  }

  
  
  



  
  // toggleDisplay() {
  //   this.isShow = false;
  //   console.log(this.isShow);
  //   return this.isShow;
  // }
}
