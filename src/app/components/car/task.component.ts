import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Car } from '../../models/car';
import { DataService } from '../../services/data.service';
import { TaskAddComponent } from '../car-add/task-add.component';


@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() car: Car;
  @Output() eventClicked = new EventEmitter<Car>();
  @Output() actualizar = new EventEmitter();
 
  i:number

  constructor(public dataService: DataService ) { }
  ngOnInit() {
  }

  onClick(car: Car) {
    this.eventClicked.emit(car);
    console.log(car)
    
    
  }


  removeTask(car: Car) {
    if(confirm('Estas seguro de eliminarlo')){
      // this.dataService.removeTask(task);
      
      this.dataService.deleteCar(car._id).subscribe((res) => {
      this.actualizar.emit();
      });
    }
    
  }

  searchTask(car: Car){
    
      this.dataService.searchTask(car);
      // console.log(this.dataService.indice)
      this.dataService.mostrar=false;
      // console.log(this.dataService.mostrar)
    
    
  }

 
}
