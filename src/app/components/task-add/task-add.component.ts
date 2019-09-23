import { Component, OnInit, Output, EventEmitter  } from '@angular/core';

import { Task } from '../../models/task'
import { DataService } from '../../services/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-task-add',
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  @Output() taskAdded = new EventEmitter<Task>();

  constructor( public dataService: DataService) { }

  ngOnInit() {
  }

  addTask(newTitle: HTMLInputElement, newDescription: HTMLInputElement, newTiempo: HTMLInputElement, newFuerza: HTMLInputElement,  newTipo: HTMLInputElement){
    console.log("adding", newTitle.value, newDescription.value, newTiempo.value, newFuerza.value, newTipo.value)
   
    this.dataService.addTask({
      title: newTitle.value,
      description: newDescription.value,
      tiempo: newTiempo.value,
      fuerza: newFuerza.value,
      tipo: newTipo.value,
    });
    newTitle.value='';
    newDescription.value='';
    newTiempo.value='';
    newFuerza.value='';
    newTipo.value='';
    return false;
  
  }
}
