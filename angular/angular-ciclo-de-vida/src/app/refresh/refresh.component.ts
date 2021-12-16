import { Time } from '@angular/common';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { TimeoutError } from 'rxjs';

@Component({
  selector: 'app-refresh',
  templateUrl: './refresh.component.html',
  styleUrls: ['./refresh.component.css']
})
export class RefreshComponent implements OnInit, OnDestroy {

  /**
   * Vamos declarar uma propriedade que retornará
   * um valor do tipo inteiro
   */

  @Input() id: number;

  interval: any;

  constructor() {
    this.id = 0;
  }

  /**
   * O método ngOnInit() é chamado uma única vez na
   * inicialização do componente. Este hook deve
   * ser usado para inicializar propriedades do
   * componente, fazer requisições HTTP, registrar
   * listener de eventos na página, ou qualquer
   * outra tarefa similar. Implemente a interface
   * OnInit para interceptar este hook. Note que não
   * podemos usar o construtor para tais tarefas,
   * pois o componente ainda não terá suas
   * input properties definidas.
   */

  ngOnInit(): void {
    this.interval = setInterval(() => {
      console.log("Component " + this.id + " refresh...")
    }, 2000);
  }

  /**
  ngOnDestroy(): É chamado uma única vez antes de
  destruir o componente. Este hook deve ser usado
  para liberar recursos alocados pelo componente,
  como listener de eventos, timers, entre outros.
  Implemente a interface OnDestroy para interceptar
  este hook. Note que deixar de liberar recursos ao
  destruir o componente pode causar vazamentos de
  memória ou problemas de desempenho graves
  na aplicação, dependendo da situação.
   */

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    clearInterval(this.interval)
  }
}
