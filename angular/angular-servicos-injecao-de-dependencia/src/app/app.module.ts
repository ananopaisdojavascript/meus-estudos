import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    // Os serviços importados aparecem aqui
    TaskService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
