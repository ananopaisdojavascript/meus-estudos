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

  showModal = false;

  imageSrc = '';
  countrySrc = '';
  nameSrc = '';
  ageSrc = 0;
  personality = '';

  constructor(private appService: AppService) {}

  ngOnInit(): void {
    this.appService.getGirls().subscribe(girl => {
      this.girls = girl;
    })
  }

  openModal(girl: Girls): void {
    this.imageSrc = girl.imageLink;
    this.nameSrc = girl.name;
    this.ageSrc = girl.age;
    this.countrySrc = girl.country;
    this.personality = girl.MBTI;
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
