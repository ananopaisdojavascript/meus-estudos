import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  /**
   * Entretanto, em vez de exibir a nota, queremos exibir
   * estrelinhas no lugar das notas. Então vamos
   * criar um componente para mostrar a nota na forma de estrelinhas.
   * Para isso precisa haver alguma forma de interação entre esse
   * componente e o componente principal, que é a lista de músicas.
   * O primeiro recurso que vamos ver é o @Input()
   */

  /**
   * O decorador @Input() sempre aparece antes da declaração da
   * propriedade. Indica a propriedade de entrada de dados
   */

  @Input() notas: number = 0;

  /**
   * Agora queremos criar uma forma de mudar as notas das músicas.
   * Vamos usar uma propriedade de saída, ou seja, @Output().
   * Quando declaramos essa propriedade, terá a semântica de um
   * evento. O componente pai vai reagir a um evento do
   * componente filho.
   */

  /**
   * EventEmitter: Objeto do Angular especial para emissão de eventos.
   * Recebe como parâmetro o tipo do valor que será emitido quando
   * o evento ocorrer
   */

  @Output() notasChange = new EventEmitter<number>();

  onClick(i: any) {
    this.notasChange.emit(i);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
