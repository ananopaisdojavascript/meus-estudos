import { Injectable } from '@angular/core';

// Indica ao Angular que a classe está sujeita à injeção de dependência
// Os objetos dessa classe serão usados em outros componentes de acordo com a necessidade
// Injectable: indica em qual injetor do aplicativo o serviço estará disponível
// 'root': injetor principal do aplicativo
// Podemos exportar um serviço no módulo, daí não há mais necessidade de usar Injectable

// @Injectable({
//   providedIn: 'root'
// })

export class TaskService {

  constructor() { }

  tarefas: string[] = [
    'Estudar Angular'
  ]

  incluirTarefa(tarefa: string) {
    this.tarefas.push(tarefa)
  }
}
