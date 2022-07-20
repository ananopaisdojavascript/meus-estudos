import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { Girls } from 'src/app/services/girls';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.scss'],
})
export class GirlsComponent implements OnInit {
  constructor(
    private girlService: ApiService,
    private router: Router,
    private someRoute: ActivatedRoute
  ) {}

  searchGirl = new FormGroup({
    name: new FormControl('', Validators.required),
  });

  search = '';

  title = 'Kpop Girls';

  girlArray: Girls[];

  get() {
    this.girlService.get().subscribe(data => {
      this.girlArray = data;
    });
  }

  delete(girl: Girls) {
    this.girlService.delete(girl.id).subscribe(() => {
      const index = this.girlArray.indexOf(girl);
      this.girlArray.splice(index, 1);
    });
  }

  ngOnInit() {
    this.get();
  }
}
