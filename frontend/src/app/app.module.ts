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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule, MatGridListModule,
    MatIconModule,
    MatListModule, MatProgressSpinnerModule, MatTabsModule
} from "@angular/material";
import {MatInputModule} from "@angular/material";

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
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatButtonModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatGridListModule
    ],
    providers: [
        AuthService,
        ConfigurationService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
