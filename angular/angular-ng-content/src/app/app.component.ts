import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title: string = 'Nosso ng-content'

  items: any = [
    {
      title: "Item 1",
      description: "Descrição",
      checked: false
    },
    {
      title: "Item 2",
      description: "Descrição",
      checked: true
    },
    {
      title: "Item 3",
      description: "Descrição",
      checked: true
    },
    {
      title: "Item 4",
      description: "Descrição",
      checked: false
    }
  ]

  toggle() {
    this.items.forEach((item: { checked: boolean; }) => item.checked = !item.checked);
  }
}
