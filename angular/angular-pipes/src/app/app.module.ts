import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
// Registra os dados de localização para português do Brasil
import localePt from '@angular/common/locales/pt';
// Os pipes sempre devem ser adicionados ao módulo
import { CepPipe } from './cep.pipe';
import { CpfPipe } from './cpf.pipe';
import { NomePipe } from './nome.pipe';
registerLocaleData(localePt)

@NgModule({
  declarations: [
    // Os pipes importados aparecem declarados aqui
    AppComponent,
    CepPipe,
    CpfPipe,
    NomePipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  // Configura o idioma padrão
  providers: [{provide: LOCALE_ID, useValue: 'pt'}],
  bootstrap: [AppComponent]
})
export class AppModule { }


