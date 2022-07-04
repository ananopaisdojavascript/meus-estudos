import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GirlFormComponent } from './girl-form/girl-form.component';
import { GirlsComponent } from './girls/girls.component';

const routes: Routes = [
  { path: '', component: GirlsComponent },
  { path: 'form', component: GirlFormComponent },
  { path: 'form/:id', component: GirlFormComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GirlsRoutingModule {}
