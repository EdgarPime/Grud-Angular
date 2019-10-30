import { Injectable } from '@angular/core';
import { Car } from '../models/car';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  selectedCar: Car;
  cars: Car[];
  public indice:number;
  public mostrar:boolean=true;
  readonly baseURL = 'http://localhost:3000/api/v1/cars';

  constructor(private http: HttpClient) {

    this.cars= [
      // {title: 'write', description: 'i have to write'},
      // {title: 'write', description: 'i have to write'}
    ];

    this.indice;
   }
   
   refreshCarList() {
    this.getCars().subscribe((res) => {
      this.cars = res as Car[];
    });
  }

   getTask(){
      if(localStorage.getItem('tasks')===null){
        return this.cars;
      }else
      {
        this.cars= JSON.parse(localStorage.getItem('tasks'));
        return this.cars
      }
     
   }

  

   getCars() {
    return this.http.get(this.baseURL);
  }

   postCar(emp: Car) {
    return this.http.post(this.baseURL, emp);
  }
  
   addTask(task: Car) {
     this.cars.push(task);
    let tasks= [];
      if (localStorage.getItem('tasks')===null){
        this.cars.push(task);
        localStorage.setItem('tasks', JSON.stringify(this.cars));
     }else {
       tasks=JSON.parse(localStorage.getItem('tasks'));
       tasks.push(task);
       localStorage.setItem('tasks', JSON.stringify(tasks));
     }   
      
   }

   removeTask(task: Car) {
     for(let i = 0; i < this.cars.length; i++){
       if(task== this.cars[i]){
         this.cars.splice(i, 1);
          localStorage.setItem('tasks', JSON.stringify(this.cars));
       }
     }
   }

   searchTask(task:Car) {
    for(let i = 0; i < this.cars.length; i++){
      if(task== this.cars[i]){
        this.indice=i;;
      }
    }
   }

   updateTask(i:number, task:Car){
     this.cars[i]=(task);
     localStorage.setItem('tasks', JSON.stringify(this.cars));
   }

   

  putCar(emp: Car) {
    return this.http.put(this.baseURL + `/${emp._id}`, emp);
  }

  deleteCar(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }
}
