import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {LoginComponent} from './view/login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {ProtectedResourceComponent} from './view/protected-resource/protected-resource.component';
import {LogoutComponent} from './view/logout/logout.component';
import {RegisterComponent} from './view/register/register.component';
import {AuthService} from './service/auth/auth.service';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {ConfigurationService} from './config/configuration.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProtectedResourceComponent,
    LogoutComponent,
    RegisterComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    AuthService,
    ConfigurationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
