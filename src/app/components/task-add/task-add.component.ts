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
  
  @Input() objetos:Task

  //public objetos: any;
  i:number;
  message:string
  mostrar: boolean=this.dataService.mostrar;
  
 
  constructor( public dataService: DataService) {
   
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
  public showMyMessage2 = false


  addTask(myForm: NgForm){
   
    if (myForm.valid == true) {
    // if (this.objetos.title != "" && this.objetos.description != "" && this.objetos.tiempo != "" && this.objetos.fuerza != "" && this.objetos.tipo != "" ) {
      this.dataService.addTask(this.objetos);
      this.objetos = {
        title: '' ,
        description: '',
        tiempo: '',
        fuerza:'',
        tipo:''
  
      }
      this.message="Se ingreso correctamente"
      this.showMyMessage2=true;
      setTimeout(()=>{
        this.showMyMessage2=false
      },3000  );
     
      myForm.resetForm();
    } else {
      this.message="Revise que todos los campos esten correctos y completos";

      this.showMyMessage=true;
      setTimeout(()=>{
        this.showMyMessage=false
      },6000  );
      
    }
    
    
  }

  updateTask(myForm: NgForm){
    
    if (myForm.valid == true && this.dataService.mostrar==false) {
      this.i=this.dataService.indice;
      this.dataService.updateTask(this.i,this.objetos);
      this.objetos = {
        title: '' ,
        description: '',
        tiempo: '',
        fuerza:'',
        tipo:''
  
      } 
      this.dataService.indice=undefined;
      // this.dataService.indice=null;
      this.message="Se actualizo correctamente"
      this.showMyMessage2=true;
      setTimeout(()=>{
        this.showMyMessage2=false
      },3000  );
      myForm.resetForm();
      this.dataService.mostrar=true

    } else if( myForm.valid == false && this.dataService.mostrar==false ) {
      this.message="Revise que todos los campos esten correctos y completos";
      this.showMyMessage=true;
      setTimeout(()=>{
      this.showMyMessage=false;
      },4000  );
  } else {
      this.message="No ha seleccionado un elemento para editar";
      this.showMyMessage=true;
      setTimeout(()=>{
      this.showMyMessage=false;
      },4000  );
  }
    
   
  }



}
