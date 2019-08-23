import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import {catchError, retry, tap} from 'rxjs/operators';
import {ajax} from 'rxjs/ajax';

@Injectable()
export class AjaxHelper {

  /// TODO: Log!

  static HandleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  constructor(private http: HttpClient) {
  }

  HttpGet(url: string, options: any): Observable<any> {
    return this.http.get<any>(url, options);
  }

  HtmlPost(url: string, req: any, options: any): Observable<object> {
    return this.http.post(url, req, options);
  }

  HttpPost<T>(url: string, req: any, options: { headers: HttpHeaders; params: HttpParams }): Observable<T> {
    return new Observable<T>((observer) => {
      this.http.post(url, req, options)
        .pipe(retry(3), // retry a failed request up to 3 times
          catchError(AjaxHelper.HandleError), // then handle the error
          tap(data => {
              /*console.log('tap data', data)*/ // Log the result or error
            },
            error => {
              console.log('tap error', error);
            }
          )
        ).subscribe((response: any) => {
        if (response) {
          // console.log('HtmlPost', response);
          observer.next(response);
        }
      }, (error: HttpErrorResponse) => {
        // console.log(error);
        return throwError(error);
      }, () => {
        /*complete*/
      });
    });
  }

  AjaxPost<T>(url: string, req: any, headers: any): Observable<T> {
    return new Observable<T>((observer) => {
      ajax.post(url, JSON.stringify(req), {'Content-Type': 'application/json'})
        .subscribe((response: any) => {
          if (response) {
            // console.log('AjaxPost', response);
            observer.next(response.response);
          }
        }, (error: HttpErrorResponse) => {
          // console.log(error);
          return throwError(error);
        }, () => {/*complete*/
        });
    });
  }

}

