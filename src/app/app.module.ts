import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { TaskAddComponent } from './components/car-add/task-add.component';
import { TaskListComponent } from './components/car-list/task-list.component';
import { TaskComponent } from './components/car/task.component';

import { DataService } from './services/data.service'
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    TaskAddComponent,
    TaskListComponent,
    TaskComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
    
  ],
  providers: [
    DataService, TaskAddComponent, TaskComponent, TaskListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
