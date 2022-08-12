import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptorService } from './services/spinner-interceptor.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedModule, HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptorService,
      multi: true
    }
  ],
  exports: [SharedModule]
})
export class CoreModule { }
