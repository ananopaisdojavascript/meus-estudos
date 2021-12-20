import { Component } from '@angular/core';
import { Exercicios } from './exercicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Desafio Guiado';

  // Propriedade para exibir ou ocultar a configuração do cronômetro
  config: boolean = false;

  exerciciosArray: Exercicios[] = [
    {
      nomeDoExercicio: 'Corrida',
      preparacao: 15,
      duracao: 30,
      descanso: 15,
      repeticoes: 3
    }
  ];
}
