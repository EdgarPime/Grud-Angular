import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../../models/car'
import { DataService } from '../../services/data.service';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-task-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class TaskListComponent implements OnInit {
  cars: Car[];
  @Output() eventClicked = new EventEmitter<Car>();
  

  constructor(public dataService: DataService) {  }

  ngOnInit() {
    this.resetForm();
    this.dataService.refreshCarList();
  }

  public clickedEvent: Car;

  childEventClicked(car: Car) {
    this.clickedEvent = car;
    console.log(car)
    this.eventClicked.emit(car)
  }

  updateTable(){
    this.resetForm();
    this.dataService.refreshCarList();
    
  }
  


 resetForm(form?: NgForm) {
    if (form)
      form.reset();
    this.dataService.selectedCar = {
      _id: "",
      marca: "",
      motor: "",
      tiempo: "",
      fuerza: "",
      tipo: ""
    }
  }

  
}
