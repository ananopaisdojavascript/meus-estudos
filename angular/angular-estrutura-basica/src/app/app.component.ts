import { Component } from '@angular/core';

// Decorador que recebe como parâmetro um objeto que vai configurar o modo de usar esse componente. Um componente sempre terá um template associado a ele, que por sua vez define a exibição do componente
@Component({
  // Configuração que dará nome a um marcador HTML que será criado e usado no aplicativo
  selector: 'app-root',
  // Configuração obrigatória que será o arquivo HTML do aplicativo
  templateUrl: './app.component.html',
  // Configuração que será a folha de estilo do aplicativo (opcional)
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-estrutura-basica';
}
