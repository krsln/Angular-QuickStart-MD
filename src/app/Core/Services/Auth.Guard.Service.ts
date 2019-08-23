import {ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {AuthenticationService} from './Authentication.Service';

@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {
  IsNavigated: Promise<boolean>;

  constructor(private  authService: AuthenticationService, private  router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.IsAuthenticated().then((authenticated: boolean) => {
      console.log('canActivate', authenticated);
      if (authenticated) {
        return true;
      } else {
        // not logged in so redirect to login page with the return url and return false
        this.IsNavigated = this.router.navigate(['/Login'], {queryParams: {returnUrl: state.url}});
        return false;
      }
    });
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('canActivateChild', childRoute);
    return this.canActivate(childRoute, state);
  }
}
