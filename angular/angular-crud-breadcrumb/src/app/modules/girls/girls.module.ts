import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GirlsRoutingModule } from './girls-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { GirlsComponent } from './girls/girls.component';
import { GirlFormComponent } from './girl-form/girl-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [GirlsComponent, GirlFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    GirlsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class GirlsModule {}
