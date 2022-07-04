import { Component, OnInit } from '@angular/core';
import { Tasks } from 'src/app/shared/tasks';
import { ApiService } from 'src/app/shared/api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title = 'Nossa Lista de Tarefas'

  taskArr: Tasks[] = [];

  id: number;

  constructor(private taskService: ApiService, private router: Router, private route: ActivatedRoute) { }

  get() {
    this.taskService.get().subscribe(data => {
      this.taskArr = data;
    })
  }

  delete(task: Tasks) {
    this.taskService.delete(task.id).subscribe(() => {
      const index = this.taskArr.indexOf(task);
      this.taskArr.splice(index, 1)
    })
  }

  ngOnInit(): void {
    this.get();

    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      this.taskService.getById(this.id);
    })
  }

}
