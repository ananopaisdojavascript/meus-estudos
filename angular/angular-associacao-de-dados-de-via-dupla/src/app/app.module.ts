import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// Importação do módulo de formulários para poder usar o ngModel
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TasklistComponent } from './tasklist/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
