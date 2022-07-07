import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nosso Modal';

  modal: boolean = false;

  openModal() {
    this.modal = true;
  }

  closeModal() {
    this.modal = false;
  }
}
