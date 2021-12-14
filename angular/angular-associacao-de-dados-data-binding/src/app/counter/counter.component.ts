import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  /**
   * Em primeiro lugar, vamos declarar de uma propriedade do tipo cadeia de caracteres (string).
   * Trata-se de um recurso normal em qualquer componente do Typescript.
   * O que torna o uso dessa propriedade possível é que podemos usá-la no arquivo html
   * por meio da associação de dados ou "data binding"
   */

  title: string = 'Nosso Contador';

  /**
   * Agora, vamos declarar uma propriedade que recebe um valor inicial do tipo inteiro
   * para o nosso contador.
   */

  value: number = 0;

  /**
   * Vamos declarar um método para aumentar o valor inicial no arquivo html
   */

  increaseValue() {
    /**
     * É obrigatório o uso do prefixo "this" dentro do método declarado 
     * porque serve de referência às propriedades da classe
     */
    this.value++
  }

  /**
   * Vamos declarar um método para diminuir o valor inicial no arquivo html
   */

  decreaseValue() {
    this.value--
  }

  constructor() { }

  ngOnInit(): void {
  }

}
