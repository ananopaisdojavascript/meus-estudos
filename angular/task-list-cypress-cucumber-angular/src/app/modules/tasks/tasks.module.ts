import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { TasksRoutingModule } from '../tasks-routing.module';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskFormComponent } from './task-form/task-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TaskListComponent, TaskFormComponent
  ],
  imports: [
    CommonModule, SharedModule, TasksRoutingModule, HttpClientModule, ReactiveFormsModule
  ],
})
export class TasksModule { }
