import { Component, Output, EventEmitter, Input } from '@angular/core';
import { Car } from './models/car'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
  title = 'GRUD-angular';

 
  public clickedEvent: Car;

  childEventClicked(task: Car) {
    this.clickedEvent = task;
    console.log(task)
  }
  

}
