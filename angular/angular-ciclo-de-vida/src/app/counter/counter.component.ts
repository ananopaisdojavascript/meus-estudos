import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  @Input() label: string;
  counter: number;

  constructor() {
    this.label = '';
    this.counter = 0;
  }

  ngOnInit(): void {
  }

  increment() {
    this.counter++;
  }

  /*
  É chamado toda vez que o valor de algum input property
  do componente for alterado. Este hook pode ser usado
  para reagir a estas mudanças, recarregando dados
  do Back End, recomputando valores, ou executando
  qualquer outra tarefa necessária.
  Implemente a interface OnChanges para
  interceptar este hook. É possível inspecionar o
  objeto passado como parâmetro para o
  método ngOnChanges para obter as propriedades
  modificadas e seus valores anteriores.
  */

  ngOnChanges(changes: SimpleChanges): void {
    // changes: objeto que fornece algumas informações
    console.log(JSON.stringify(changes))

  }

}
