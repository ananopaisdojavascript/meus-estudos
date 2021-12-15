import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Vamos criar uma propriedade que recebe um valor
   * do tipo lógico (verdadeiro ou falso) para mostrar
   * ou não o elemento
   */

  exibirElemento: boolean = false; // Valor inicial falso


  // Método para exibir o elemento se a condição for verdadeira
  mostrarElemento() {
    // Inversão da condição, que vai passar de falsa para verdadeira
    this.exibirElemento = true;
  }

  // Método para esconder o elemento se a condição for falsa
  esconderElemento() {
    // Voltar ao valor inicial determinado como falso
    this.exibirElemento = false;
  }


}
