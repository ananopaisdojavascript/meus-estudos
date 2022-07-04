import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskFormComponent } from './tasks/task-form/task-form.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  { path: '', component: TaskListComponent }, // Link para a página inicial
  { path: 'form', component: TaskFormComponent }, // Link para o fomulário em caso de inclusão de tarefa
  { path: 'form/:id', component: TaskFormComponent }, // Link para o formulário em caso de atualização de tarefa
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TasksRoutingModule { }
