import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CreateAccountComponent } from './components/create-account/create-account.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbCardModule, NbButtonModule, NbCheckboxModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbFormFieldModule, NbStepperModule, NbIconModule, NbSidebarModule, NbActionsModule, NbSearchModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthorDashboardComponent } from './components/author/author-dashboard/author-dashboard.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateAccountComponent,
    AuthorDashboardComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbSidebarModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NbSelectModule,
    NbSpinnerModule,
    NbFormFieldModule,
    NbStepperModule,
    NbActionsModule,
    NbSearchModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
