import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';
import {map, take, tap} from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {

  IsNavigated: Promise<boolean>;

  constructor(private authService: AuthService, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivate', state.url);
    return this.authService.User.pipe(take(1), map((user) => {
        const IsAuthenticated = !!user;
        if (IsAuthenticated) {
          return true;
        } else {
          return this.router.createUrlTree(['/Auth'], {queryParams: {returnUrl: state.url}});
        }
      })
    );
    // return this.authService.User.pipe(map((user) => { return !!user; }), tap(IsAuthenticated => {
    //     if (!IsAuthenticated) { // not logged in so redirect to login page with the return url and return false
    //       this.IsNavigated = this.router.navigate(['/Auth'], {queryParams: {returnUrl: state.url}});
    //     }
    //   })
    // );
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log('canActivateChild', childRoute);
    return this.canActivate(childRoute, state);
  }
}
