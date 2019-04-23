import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../../service/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AnonymousGuard implements CanActivate {


  constructor(private auth: AuthService, private router: Router) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.auth.isLoggedIn()) {
      return this.router.parseUrl('/protected');
    }
    return true;
  }
}
