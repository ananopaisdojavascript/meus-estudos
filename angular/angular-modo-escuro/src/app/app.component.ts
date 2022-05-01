import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title: string = "Nosso Modo Escuro";

  constructor() {}

  isDarkModeActivated: boolean = false;
  isDarkButtonActivated: boolean = true;
  isLightButtonActivated: boolean = false;

  openDarkMode() {
    this.isDarkModeActivated = !this.isDarkModeActivated
    this.isDarkButtonActivated = !this.isDarkButtonActivated
    this.isLightButtonActivated = !this.isLightButtonActivated
  }

  closeDarkMode() {
    this.isDarkModeActivated = !this.isDarkModeActivated
    this.isDarkButtonActivated = !this.isDarkButtonActivated
    this.isLightButtonActivated = !this.isLightButtonActivated
  }

  ngOnInit(): void {

  }

}
