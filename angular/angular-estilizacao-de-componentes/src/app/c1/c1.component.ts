import { Component, OnInit } from '@angular/core';

/**
 * É possível definir estilos "inline" do componente.
 */

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styles: [".box { background: hotpink; }"]
})
export class C1Component implements OnInit {

  title = 'Componente C1';

  // Criamos uma propriedade para usá-la como classe dinâmica no elemento HTML
  // Esse tipo de propriedade pode receber uma string com várias classes separadas por espaço
  className: string = 'box';

  constructor() { }

  ngOnInit(): void {
  }

}
