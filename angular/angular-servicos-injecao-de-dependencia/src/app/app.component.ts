import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Nossos Serviços';

  taskService: TaskService;

  novaTarefa = '';

  /**
   * Vamos usar o serviço criado no nosso componente
   */
  constructor(taskService: TaskService){
    this.taskService = taskService;
  }

  ngOnInit(): void {}
}
