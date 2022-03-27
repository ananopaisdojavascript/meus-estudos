import { ContactUpdateComponent } from './contact-update/contact-update.component';
import { ContactCreateComponent } from './contact-create/contact-create.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'contacts', component: ContactListComponent },
  { path: 'contacts/create', component: ContactCreateComponent },
  { path: 'contacts/update/:id', component: ContactUpdateComponent  },
  { path: '', redirectTo: 'contacts', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
