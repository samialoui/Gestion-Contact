import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UsersComponent} from './users.component';
import {AddEditUserComponent} from './add-edit-user/add-edit-user.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {AuthGuard} from '../shared/guards/auth.guard';
import {AdminGuard} from '../shared/guards/admin.guard';

const routes: Routes = [
  {path: 'list', component: UsersComponent },
  {path: 'new', component: AddEditUserComponent, canActivate: [AdminGuard]},
  {path: 'edit/:id', component: AddEditUserComponent, canActivate: [AdminGuard]},
  {path: 'change-password', component: ChangePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
