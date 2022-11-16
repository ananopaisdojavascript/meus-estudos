import { MsalGuard } from './msal.guard';
import { PrivatePageComponent } from './private-page/private-page.component';
import { PublicPageComponent } from './public-page/public-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'public', component: PublicPageComponent },
  { path: 'private', component: PrivatePageComponent, canActivate: [MsalGuard] },
  { path: '**', component: PublicPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
