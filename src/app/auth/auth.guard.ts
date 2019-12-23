import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserAuthService } from '../service/user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private userAuthService: UserAuthService, private router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    this.userAuthService.redirectUrl = state.url;
    console.log('URL', state.url);
    return Observable.create((observer: Observer<boolean>) => {
      if (this.userAuthService.loggedIn) {
        console.log('Logged in');
        observer.next(true);
      }
      else {
        console.log('Not Logged In');
        this.router.navigate(['login'], { queryParams: { from: state.url.substr(1) } });
      }
    })
  }

}
