import { Component, OnInit, Output, EventEmitter, Input  } from '@angular/core';

import { Car } from '../../models/car'
import { DataService } from '../../services/data.service';
import { NgForm} from '@angular/forms';
import { TaskListComponent} from '../car-list/car-list.component'

@Component({
  selector: 'app-task-add', 
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class TaskAddComponent implements OnInit {
  
  @Input() objetos:Car
 
  i:number;
  message:string
  mostrar: boolean=this.dataService.mostrar;
  
 
  constructor( public dataService: DataService, public taskList: TaskListComponent) {
   
   }
  
 
  ngOnInit() {
    
    this.objetos = {
      _id: '',
      marca: '' ,
      motor: '',
      tiempo: '',
      fuerza:'',
      tipo:''

    }
    
    
    
  }
  public showMyMessage = false
  public showMyMessage2 = false

  addTask(myForm: NgForm){
   
    if (myForm.valid == true) {
   
      this.dataService.postCar(this.objetos).subscribe((res) => {
        this.dataService.refreshCarList();

        this.message="Se ingreso correctamente"
        this.showMyMessage2=true;
        setTimeout(()=>{
          this.showMyMessage2=false
        },3000  );
        
        myForm.resetForm();
      })
    
      
     
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
      
      this.dataService.putCar(this.objetos).subscribe((res) => {
        myForm.resetForm();
        this.dataService.refreshCarList();
        
        this.message="Se actualizo correctamente"
        this.showMyMessage2=true;
        setTimeout(()=>{
          this.showMyMessage2=false
        },3000  );
        
        this.dataService.mostrar=true
      });


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
