import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorDashboardComponent } from './components/author/author-dashboard/author-dashboard.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { LoginComponent } from './components/login/login.component';

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
  path: 'author/dashboard',
  component: AuthorDashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
