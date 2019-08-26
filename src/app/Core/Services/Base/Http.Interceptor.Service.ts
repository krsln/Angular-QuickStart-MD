import {Injectable, Inject, PLATFORM_ID} from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpResponse} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {TransferState, makeStateKey, StateKey} from '@angular/platform-browser';
import {isPlatformServer} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {
  constructor( // private transferState: TransferState,
    @Inject(PLATFORM_ID) private platformId: any) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const platform = isPlatformServer(this.platformId) ? 'serverSide' : 'browserSide';
    const key: StateKey<string> = makeStateKey<string>(request.url);

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        if (event instanceof HttpResponse) {
          console.log('intercept():', platform, key, 'event');
        }
        return event;
      }));
  }

}
