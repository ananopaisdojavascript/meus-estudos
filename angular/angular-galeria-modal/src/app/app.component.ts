import { Component } from '@angular/core';
import { cats } from './cats';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Nossa galeria com modal';

  cats = cats;

  showModal: boolean = false;

  imageSrc: string = '';


  openModal(image: any): void {
    this.showModal = true;
    this.imageSrc = image.imgLink;
  }

  closeModal(): void {
    this.showModal = false;
  }
}
