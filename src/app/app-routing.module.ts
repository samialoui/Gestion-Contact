import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './shared/guards/auth.guard';


const routes: Routes = [
  {
    path: '', redirectTo: '/users/list', pathMatch: 'full'
  },
  {
    path: 'users',  canActivate: [AuthGuard], loadChildren: () =>
      import('./users/users.module').then(m => m.UsersModule),
  },
  {path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
