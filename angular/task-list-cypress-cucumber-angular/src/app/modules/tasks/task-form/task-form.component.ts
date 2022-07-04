import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tasks } from 'src/app/shared/tasks';
import { ApiService } from 'src/app/shared/api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {

  newTask: Tasks = {
    id: null,
    task: ''
  }

  title: string;
  buttonName: string;
  id: number;
  tasks: Tasks[];

  constructor(private taskService: ApiService, private router: Router, private route: ActivatedRoute) { }

  taskForm = new FormGroup({
    task: new FormControl('', Validators.required)
  })

  goToMainPage() {
    this.router.navigate(['/tasks'])
  }


  // create() {
  //   this.taskService.create(this.taskForm.value).subscribe(task => {
  //     this.router.navigate(['/tasks']);
  //   })
  // }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      this.taskService.getById(this.id).subscribe(task => {
        this.taskForm.reset(task)
      })
    })
  }

}
