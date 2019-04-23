import {Injectable} from '@angular/core';
import {User} from '../../model/user/user';
import {Router} from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ConfigurationService} from '../../config/configuration.service';
import {Observable} from 'rxjs';
import {Credentials} from '../../model/credentials/credentials';
import {RegisterRequest} from '../../model/register-request/register-request';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public get user(): User {
    return JSON.parse(localStorage.getItem('user'));
  }

  public set user(user: User) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public get baseAuth(): string {
    return localStorage.getItem('baseAuth');
  }

  public set baseAuth(baseAuth: string) {
    localStorage.setItem('baseAuth', baseAuth);
  }

  constructor(private router: Router, private http: HttpClient, private config: ConfigurationService) {
    this.user = JSON.parse(localStorage.getItem('user'));
    this.baseAuth = localStorage.getItem('baseAuth');
  }

  login(username: string, password: string): Observable<User> {
    return this.http.post<User>(this.config.url + '/login', new Credentials(username, password));
  }

  validate(): Observable<boolean> {
    const headerOptions = {
      headers: new HttpHeaders().set('Authorization', 'Basic ' + this.baseAuth)
    };
    return this.http.get<boolean>(this.config.url + '/validate', headerOptions);
  }

  deAuth(): void {
    localStorage.removeItem('baseAuth');
    localStorage.removeItem('user');
  }

  isLoggedIn(): boolean {
    if (this.user === null || this.baseAuth === null) {
      this.deAuth();
      return false;
    } else {
      return true;
    }
  }

  register(registerRequest: RegisterRequest): Observable<User> {
    return this.http.post<User>(this.config.url + '/register', registerRequest);
  }
}
