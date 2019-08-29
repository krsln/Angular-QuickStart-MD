import {HttpEvent, HttpHandler, HttpInterceptor, HttpParams, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthService} from '../../Auth';
import {exhaustMap, take} from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // token base auth
    return this.authService.User.pipe(
      take(1), exhaustMap(user => {
        if (!user) {
          return next.handle(req);
        }
        // Get the auth header (fake value is shown here)
        const authHeader = 'gh15g12h5gj25h-/gj25k55kk'; // this.authService.getAuthHeader();

        const modeReq = req.clone({
          headers: req.headers.set('Authorization', authHeader),
          params: new HttpParams().set('auth', user.Email) // user.token
        });
        console.log('AuthInterceptor', user.Email, modeReq.url);
        return next.handle(modeReq);
      })
    );
  }
}
