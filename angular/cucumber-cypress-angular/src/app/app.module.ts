import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GirlsComponent } from './girls/girls.component';
import { GirlSearchPipe } from './girls/girl-search.pipe';
import { GirlSelectPipe } from './girls/girl-select.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GirlsComponent,
    GirlSearchPipe,
    GirlSelectPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
