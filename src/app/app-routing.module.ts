import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { LoginComponent } from './pages/login/login.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';

const routes: Routes = [{
  path: '',
  component: LoginComponent
},{
  path: 'login',
  component: LoginComponent
}, {
  path: 'create-account',
  component: CreateAccountComponent
},{
  path: 'logout',
  component: LogoutComponent
}
,{
  path: 'user/profile',
  component: UserProfileComponent,
  canActivate:[AuthGuard]
},{
  path:'admin/profile',
  component: AdminProfileComponent,
  canActivate:[AuthGuard]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
