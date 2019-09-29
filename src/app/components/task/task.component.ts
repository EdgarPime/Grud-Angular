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
  @Output() i = new EventEmitter<number>();
  @Output() tasks = new EventEmitter<Task>();
  
  constructor(public dataService: DataService ) { }
  ngOnInit() {
  }

  child:number =3;

  exampleMethos(){
    this.i.emit(this.child);
  }

  removeTask(task: Task) {
    if(confirm('Quieres eliminarlo')){
      this.dataService.removeTask(task);

    }
    
  }

  searchTask(task: Task){
    return task;
  }

  // toggleDisplay() {
  //   this.isShow = false;
  //   console.log(this.isShow);
  //   return this.isShow;
  // }
}
