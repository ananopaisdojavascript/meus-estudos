import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nossos Pipes';

  text: string = "Uma primeira mensagem para testar nossos pipes";

  num: number = 10;

  diaDeHoje = new Date();

  /**
   * Podemos criar nosso próprios pipes. Vamos ver um exemplo de
   * pipe para formatar o CEP
   */

  meuCEP: string = '57060140';

  /**
   * Vamos criar mais um pipe para formatar o CPF
   */

  meuCPF: string = '72162599040';

  /**
   * Vamos criar outro pipe para colocar os nomes de um vetor
   * em uma única string
   */
  lista = [
    "Lisa",
    "Rosé",
    "Irene"
  ]

  novoNome = '';

  incluirNome(nome: string) {
    this.lista.push(nome)
    this.novoNome = ''
  }
}
