import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  /**
   * Vamos criar um vetor de músicas e suas
   * respectivas notas
   */

  cancoes  = [
    {
      grupo: "Blackpink",
      cancao: "Ice Cream",
      nota: 2
    },
    {
      grupo: "Gfriend",
      cancao: "Mago",
      nota: 5
    },
    {
      grupo: "CLC",
      cancao: "Black Dress",
      nota: 5
    },
    {
      grupo: "IZ*ONE",
      cancao: "Fiesta",
      nota: 4
    },
    {
      grupo: "Dreamcatcher",
      cancao: "Piri",
      nota: 5
    },
    {
      grupo: "Red Velvet",
      cancao: "Dumb Dumb",
      nota: 5
    },
    {
      grupo: "SNSD",
      cancao: "Into The New World",
      nota: 5
    },
  ]
}
