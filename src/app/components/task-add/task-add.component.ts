import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

import { Task } from '../../models/task'
import { DataService } from '../../services/data.service';
import { Data } from '@angular/router';
import { TaskComponent } from '../task/task.component';
import { FormGroup, FormBuilder, Validators, FormControl, NgForm} from '@angular/forms';

@Component({
  selector: 'app-task-add', 
  templateUrl: './task-add.component.html',
  styleUrls: ['./task-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  isShow: boolean=true;

  // title:string;
  // description:string;
  // tiempo:string;
  // fuerza:string;
  // tipo:string;
  public objetos: any;
  i:number;
  message:string
 
  constructor( public dataService: DataService, public taskComponent:TaskComponent) {
    
   }
  
 
  ngOnInit() {
    this.objetos = {
      title: '' ,
      description: '',
      tiempo: '',
      fuerza:'',
      tipo:''
    }
    
    
  }
  public showMyMessage = false


  addTask(myForm: NgForm){
    if (myForm.valid === true ) {
      this.dataService.addTask(this.objetos);
      this.objetos={};
      this.message="Se ingreso correctamente"
      myForm.resetForm();
    } else {
      this.message="Ningun campo puede estar vacio"

      this.showMyMessage=true;
      setTimeout(()=>{
        this.showMyMessage=false
      },3000  );
      
      // this.showMyMessage = true;
  
    }
    
    
  }

  updateTask($event){
    //this.dataService.updateTask($event);
    console.log($event)
  }

  
  


}
