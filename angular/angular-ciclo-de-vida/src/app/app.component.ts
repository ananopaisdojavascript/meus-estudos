import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ciclo de Vida de um Componente';

  /**
   * Vetor que guarda os ids dos componentes
   * criados até o momento
   */
  array: number[] = [];

  // Contador do número de componentes incluídos na página
  counter: number = 0;
  lastId: number = 0;

  label: string = '';

  delete(id: number) {
    this.array.splice(this.array.indexOf(id), 1);
  }

  add() {
    this.lastId++;
    this.array.push(this.lastId);
  }

}
