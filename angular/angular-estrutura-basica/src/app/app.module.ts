// Essas são as importações básicas que aparecem no módulo principal
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

/**
 * Decorator (ou decorador): Construção sintática que exerce a função principal de permitir a declaração de configurações nesse módulo, ou seja, é um modificador de classes (introduz os metadados que serão configurados no módulo)
 */
@NgModule({
  // Inclusão das dependências do módulo
  declarations: [
    // Inclusão de todos os componentes de um determinado módulo
    AppComponent
  ],
  imports: [
    // Dependência obrigatória porque permite a execução dos aplicativos no navegador
    BrowserModule
  ],
  providers: [],
  // Configuração que indica o componente principal do módulo
  bootstrap: [AppComponent]
})
// Classe que corresponde ao módulo principal do aplicativo
export class AppModule { }
