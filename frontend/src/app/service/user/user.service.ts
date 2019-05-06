import { Injectable } from '@angular/core';
import {User} from "../../model/user/user";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {ConfigurationService} from "../../config/configuration.service";
import {AuthService} from "../auth/auth.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private config: ConfigurationService, private auth: AuthService) { }

  list(): Observable<User[]> {
      const headerOptions = {
          headers: new HttpHeaders().set('Authorization', 'Basic ' + this.auth.baseAuth)
      };

      return this.http.get<User[]>(this.config.url + '/user/list', headerOptions);
  }
}
