import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MemberPipe } from './member.pipe';
import { TablefilterPipe } from './tablefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MemberPipe,
    TablefilterPipe,
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
