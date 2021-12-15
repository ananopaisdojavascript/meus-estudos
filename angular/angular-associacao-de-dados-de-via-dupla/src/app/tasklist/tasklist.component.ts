import { Component, OnInit } from '@angular/core';
import { Tarefas } from './tasks';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent implements OnInit {

  title: string = 'Nossa Lista de Tarefas'

  /**
   * Vamos criar uma propriedade para usar no input da nossa lista
   * e também para chamar no método de incluir tarefas sem passar
   * um parâmetro
   */

  novaTarefa: string = '';

  tarefas: Tarefas[] = [
    {tarefa: "Estudar Angular", tarefaFeita: true},
    {tarefa: "Ir ao supermercado", tarefaFeita: false}
  ];

  /**
   * Vamos chamar a propriedade "novaTarefa" aqui no nosso método,
   * sem precisar passar um parâmetro. Essa propriedade sempre estará
   * sincronizada com o campo de texto
   */

  incluirTarefa() {
    this.tarefas.push({
      tarefa: this.novaTarefa,
      tarefaFeita: false
    })
  }

  excluirTarefa(i: number) {
    this.tarefas.splice(i, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
