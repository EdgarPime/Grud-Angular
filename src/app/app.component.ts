import { Component } from '@angular/core';
import { Task } from './models/task'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GRUD-angular';
 
  public clickedEvent: Task;

  childEventClicked(task: Task) {
    this.clickedEvent = task;
    console.log(task)
  }
  

}
