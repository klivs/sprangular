import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './view/login/login.component';
import {ProtectedResourceComponent} from './view/protected-resource/protected-resource.component';
import {LogoutComponent} from './view/logout/logout.component';
import {RegisterComponent} from './view/register/register.component';
import {LoggedInGuard} from './guard/logged-in/logged-in.guard';
import {NotFoundComponent} from './view/not-found/not-found.component';
import {AnonymousGuard} from './guard/anonymous/anonymous.guard';
import {UserListComponent} from "./view/user-list/user-list.component";

const routes: Routes = [
    {
        path: '',
        component: LoginComponent,
        canActivate: [AnonymousGuard]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [AnonymousGuard]
    },
    {
        path: 'protected',
        component: ProtectedResourceComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [AnonymousGuard]
    },
    {
        path: 'user-list',
        component: UserListComponent,
        canActivate: [LoggedInGuard]
    },
    {
        path: '**',
        redirectTo: 'not-found'
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
