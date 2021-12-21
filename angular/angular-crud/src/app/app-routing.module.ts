import { UpdateMemberComponent } from './update-member/update-member.component';
import { CreateMemberComponent } from './create-member/create-member.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MemberListComponent } from './member-list/member-list.component';
import { SearchMemberComponent } from './search-member/search-member.component';


const routes: Routes = [
  { path: 'members', component: MemberListComponent },
  { path: 'create', component: CreateMemberComponent },
  { path: 'update/:id', component: UpdateMemberComponent},
  { path: 'search', component: SearchMemberComponent},
  { path: '', redirectTo: 'members', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
