import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { GirlService } from './girl.service';
import { Girls } from './girls';

@Component({
  selector: 'app-girls',
  templateUrl: './girls.component.html',
  styleUrls: ['./girls.component.css']
})
export class GirlsComponent implements OnInit {

  constructor(private girlService: GirlService) { }

  title: string = 'Kgirls';

  girls = new FormGroup({
    member: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  })

  girlsArray: Girls[] = [];

  girl: string = '';

  group: string = '';

  groups = ["BlackPink", "Twice", "Loona", "Red Velvet", "SNSD"]

  ngOnInit(): void {
    this.girlService.getData().subscribe((girl) => {
      this.girlsArray = girl
    })
  }

}
