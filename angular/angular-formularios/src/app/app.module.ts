import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
/**
 * Reactive Forms Module: forma mais
 * avançada de lidar com formulários
 */
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SnsdPipe } from './snsd.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SnsdPipe
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
