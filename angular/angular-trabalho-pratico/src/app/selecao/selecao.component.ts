import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent implements OnInit {

  /**
   * Quando o compilador está no modo "strict", as propriedades nunca
   * serão declaradas com valor indefinido ou "undefined" porque não aceitam
   * esse tipo de valor
   */

  @Input() titulo: string;
  @Input() opcoes: string[];
  @Input() escolhaAte: number;
  opcoesSelecionadas: string[];

  constructor() {
    this.titulo = '';
    this.opcoes = [];
    this.escolhaAte = 0;
    this.opcoesSelecionadas = [];
  }

  selecionaOpcao(opcao: string) {
    if (this.escolhaAte === 1) {
      this.opcoesSelecionadas = [opcao]
    } else {
      const index = this.opcoesSelecionadas.indexOf(opcao);
      if (index !== -1) {
        this.opcoesSelecionadas.splice(index, 1);
      } else {
        this.opcoesSelecionadas.push(opcao);
      }
    }

    console.log(this.opcoesSelecionadas)
  }

  ngOnInit(): void {
  }

}
