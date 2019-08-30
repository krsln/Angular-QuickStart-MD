import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpEventType,
  HttpParams
} from '@angular/common/http';
import {Observable, of, throwError} from 'rxjs';
import {catchError, exhaustMap, map, take, tap} from 'rxjs/operators';
import {TransferState, makeStateKey, StateKey} from '@angular/platform-browser';
import {isPlatformServer} from '@angular/common';
import {AuthService} from '../Auth';

@Injectable({
  providedIn: 'root'
})
export class TestInterceptor implements HttpInterceptor {
  constructor( // private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any, private  authService: AuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const platform = isPlatformServer(this.platformId) ? 'serverSide' : 'browserSide';
    const key: StateKey<string> = makeStateKey<string>(request.url);
    console.log('HttpInterceptorService');

    // TODO: header
    const modifiedReq = request.clone({
      headers: request.headers.append('Auth', 'xyz')
    });
    return next.handle(modifiedReq);

    // error handling
    // return next.handle(request).pipe(
    //   tap(evt => {
    //     if (evt instanceof HttpResponse) {
    //       if (evt.body && evt.body.success) {
    //         // console.log(evt.body);
    //       }
    //     }
    //   }),
    //   catchError((err: any) => {
    //     if (err instanceof HttpErrorResponse) {
    //       // try { } catch (e) { }
    //       // log error
    //     }
    //     // return of(err);
    //     return throwError(err);
    //   })
    // );

    // return next.handle(modifiedReq).pipe(
    //   // tap(event => {
    //   //   if (event.type === HttpEventType.Response) {
    //   //     console.log('Incoming response', event.body);
    //   //   }
    //   // }),
    //   map((event: HttpEvent<any>) => {
    //     if (event instanceof HttpResponse) {
    //       console.log('intercept():', platform, key, 'event');
    //     }
    //     return event;
    //   })
    // );
  }

}
