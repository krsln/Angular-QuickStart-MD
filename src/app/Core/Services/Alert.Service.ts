import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

import {AlertType, Alert} from '../../Shared/Models/Local';

@Injectable({providedIn: 'root'})
export class AlertService {
  private subject = new Subject<Alert>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.Clear();
        }
      }
    });
  }

  GetAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  Success(message: string, title = '', keepAfterRouteChange = false) {
    this.Alert(AlertType.Success, message, title, keepAfterRouteChange);
  }

  Error(message: string, title = '', keepAfterRouteChange = false) {
    this.Alert(AlertType.Error, message, title, keepAfterRouteChange);
  }

  Info(message: string, title = '', keepAfterRouteChange = false) {
    this.Alert(AlertType.Info, message, title, keepAfterRouteChange);
  }

  Warn(message: string, title = '', keepAfterRouteChange = false) {
    this.Alert(AlertType.Warning, message, title, keepAfterRouteChange);
  }

  Alert(type: AlertType, message: string, title = '', keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({Type: type, Title: title, Message: message} as Alert);
  }

  Clear() {
    // clear alerts
    this.subject.next();
  }
}

