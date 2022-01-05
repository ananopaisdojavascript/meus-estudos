import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AppService, Girls } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'gp999-demo';

  girls: Girls[] = [];

  showModal: boolean = false;

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getGirls().subscribe(girl => {
      this.girls = girl;
    })
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
