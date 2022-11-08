import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RandomBackgroundColorComponent } from './random-background-color/random-background-color.component';

@NgModule({
  declarations: [
    AppComponent,
    RandomBackgroundColorComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
