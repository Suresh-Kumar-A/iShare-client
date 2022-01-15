import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import { CreateAccountComponent } from './pages/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './auth.guard';
import { AdminProfileComponent } from './pages/admin/admin-profile/admin-profile.component';
import { UserProfileComponent } from './pages/user/user-profile/user-profile.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InternalServerErrorComponent } from './pages/internal-server-error/internal-server-error.component';
import { UserDialogComponent } from './components/user-dialog/user-dialog.component';
import { ViewUsersComponent } from './pages/admin/view-users/view-users.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AdminProfileComponent,
    UserProfileComponent,
    LogoutComponent,
    PageNotFoundComponent,
    InternalServerErrorComponent,
    UserDialogComponent,
    ViewUsersComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
