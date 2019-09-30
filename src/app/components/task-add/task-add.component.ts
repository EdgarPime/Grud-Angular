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
  


  public objetos: any;
  i:number;
  message:string
  mostrar: boolean=this.dataService.mostrar;
  
 
  constructor( public dataService: DataService, public taskComponent:TaskComponent) {
  
   }
  
 
  ngOnInit() {
    this.objetos=this.dataService.tasks[this.i];
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
    console.log(this.dataService.mostrar)
    if (myForm.valid === true ) {
    // if (this.objetos.title != "" && this.objetos.description != "" && this.objetos.tiempo != "" && this.objetos.fuerza != "" && this.objetos.tipo != "" ) {
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
      
    }
    
    
  }

  updateTask(myForm: NgForm){
    if (myForm.valid === true ) {
      this.i=this.dataService.indice;
      this.dataService.updateTask(this.i,this.objetos);
      this.objetos={};
      this.message="Se actualizo correctamente"
      
      myForm.resetForm();
      console.log(this.i)
      console.log(this.dataService.tasks[this.i]);

    }
   
  }



}
