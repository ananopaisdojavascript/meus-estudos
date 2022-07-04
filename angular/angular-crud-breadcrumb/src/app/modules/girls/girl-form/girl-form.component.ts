import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Girls } from 'src/app/services/girls';

@Component({
  selector: 'app-girl-form',
  templateUrl: './girl-form.component.html',
  styleUrls: ['./girl-form.component.scss'],
})
export class GirlFormComponent implements OnInit {
  constructor(
    private girlService: ApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  editName = false;

  girl: Girls[];

  girlForm = new FormGroup({
    name: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required),
  });

  create() {
    this.girlService.create(this.girlForm.value).subscribe(data => {
      this.router.navigate(['/girls']);
    });
    this.girlForm.reset();
  }

  id: number | undefined;

  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.id = Number(param.get('id'));
      this.girlService.getById(this.id).subscribe(girl => {
        this.girlForm.reset(girl);
      });
    });

    this.editName = !this.id;
  }

  update() {
    this.girlService
      .update({ id: this.id, ...this.girlForm.value })
      .subscribe(data => {
        this.router.navigate(['/girls']);
      });
    this.girlForm.reset();
  }

  onSubmit() {
    if (this.id) {
      this.update();
    } else {
      this.create();
    }
  }
}
