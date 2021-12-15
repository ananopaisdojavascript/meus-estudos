import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarefas } from './task';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  title: string = 'Nossa Lista de Tarefas';

  /**
   * Vamos criar uma propriedade (um vetor) para colocar nossas
   * tarefas. Será um vetor de objetos com uma identificação e a
   * tarefa em si. Esse vetor vai retornar a interface criada em
   * um arquivo ts separado.
   */

  tarefas: Tarefas[] = [
    {
      tarefa: 'Estudar Angular',
      tarefaFeita: true
    },
    {
      tarefa: 'Ir ao supermercado',
      tarefaFeita: false
    }
  ];

  /**
   * Vamos criar um método para adicionar tarefas à nossa lista.
   */

  incluirTarefa(descricao: string) {
    this.tarefas.push({
      tarefa: descricao,
      tarefaFeita: false
    })
  }

  /**
   * Vamos criar um método para excluir tarefas da nossa lista.
   * Porém, precisamos indicar qual tarefa deve ser apagada.
   * Portanto, devemos capturar o índice do nosso vetor.
   */

  excluirTarefa(i: number) {
    console.log(i)
    this.tarefas.splice(i, 1);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
