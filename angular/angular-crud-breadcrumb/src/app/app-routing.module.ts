import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'girls', pathMatch: 'full' },
  {
    path: 'girls',
    loadChildren: () =>
      import('../app/modules/girls/girls.module').then(m => m.GirlsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
