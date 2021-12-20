import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Exercicios } from '../exercicio';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit, OnDestroy {

  @Input() exerciciosArray: Exercicios[] = [];

  exercicioAtual: number = 0;
  repeticaoAtual: number = 0;
  fase: number = 0;
  intervalo: any;
  tempoRestante: any;

  constructor() { }

  iniciar() {
    if (!this.intervalo) {
      this.intervalo = setInterval(() => {
        if (this.tempoRestante > 0) {
          this.tempoRestante--;
        } else {
          this.proximo();
        }
      }, 100)
    }
  }

  pausar() {
    if (this.intervalo) {
      clearInterval(this.intervalo)
      this.intervalo = undefined;
    }
  }

  reiniciar() {
    this.exercicioAtual = 0;
    this.repeticaoAtual = 0;
    this.fase = 0;
    const exercicio = this.exerciciosArray[this.exercicioAtual];
    this.tempoRestante = this.obterTempo();
  }

  formatarTempo(tempo: number) {
    return (tempo / 10).toString()
  }

  proximo() {
    if (this.fase < 2) {
      const exercicio = this.exerciciosArray[this.exercicioAtual];
      this.fase++;
    } else {
      const exercicio = this.exerciciosArray[this.exercicioAtual];
      if (this.repeticaoAtual < exercicio.repeticoes - 1) {
        this.repeticaoAtual++;
        this.fase = 1;
      } else {
        if (this.exercicioAtual < this.exerciciosArray.length - 1) {
          this.exercicioAtual++;
          this.repeticaoAtual = 0;
          this.fase = 0;
        } else {
          return;
        }
      }
    }
    this.tempoRestante = this.obterTempo();
  }

  ngOnInit(): void {
    this.reiniciar();
  }

  ngOnDestroy(): void {
    this.pausar();
  }

  obterTempo() {
    const exercicio = this.exerciciosArray[this.exercicioAtual];
    switch (this.fase) {
      case 0: return exercicio.preparacao * 10
      case 1: return exercicio.duracao * 10
      case 2: return exercicio.descanso * 10
    }
  }

}
