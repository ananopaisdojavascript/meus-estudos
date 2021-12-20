import { Component } from '@angular/core';
// Importação de items que vão ser usados nos formulários
// FormControl: campo do formulário
// FormGroup: grupo de campos ou o formulário propriamente dito
// Validators: validam os campos do formulário como um todo
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Nosso Formulário';

  meuFormulario = new FormGroup({
    // Usar um validador para tornar o campo nome de preenchimento obrigatório
    nome: new FormControl('', [Validators.required]),
    email: new FormControl('')
  })

  enviar() {
    console.log(this.meuFormulario.value);
    this.meuFormulario.reset();
  }

  snsd = new FormGroup({
    member: new FormControl('')
  })

  member: string = '';

  gg = [
    "TaeYeon",
    "HyoYeon",
    "Yuri",
    "Sunny",
    "Jessica",
    "SooYoung",
    "SeoHyun",
    "YoonA",
    "Tiffany"
  ]
}
