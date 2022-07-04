import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GirlsModule } from './modules/girls/girls.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, GirlsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
