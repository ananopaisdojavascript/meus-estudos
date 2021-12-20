import { Component, Input, OnInit } from '@angular/core';
import { Exercicios } from '../exercicio';

@Component({
  selector: 'app-configuracoes',
  templateUrl: './configuracoes.component.html',
  styleUrls: ['./configuracoes.component.css']
})
export class ConfiguracoesComponent implements OnInit {

  @Input() exerciciosArray: Exercicios[] = [];

  exercicios: Exercicios = {
    nomeDoExercicio: '',
    preparacao: 15,
    duracao: 30,
    descanso: 30,
    repeticoes: 3
  };

  constructor() { }

  ngOnInit(): void {
  }

  incluirExercicio() {
    this.exerciciosArray.push(this.exercicios);
    this.exercicios = {...this.exercicios, nomeDoExercicio: ''};
  }

  excluirExercicio(i: number) {
    this.exerciciosArray.splice(i, 1)
  }
}
