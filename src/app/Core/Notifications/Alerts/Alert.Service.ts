import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Subject} from 'rxjs';

import {Notification, NotificationType, NotificationWay} from './Models';

@Injectable({providedIn: 'root'})
export class AlertService {
  private NotifySubject = new Subject<Notification>();
  Notify = this.NotifySubject.asObservable();
  KeepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.KeepAfterRouteChange) {
          // only keep for a single route change
          this.KeepAfterRouteChange = false;
        } else {
          // clear alert messages
          this.Clear();
        }
      }
    });
  }

  Alert(Message: string, Title?: string, ExpireIn = 4000, Type: NotificationType = NotificationType.None) {
    this.NotifySubject.next({
      Way: NotificationWay.Alert, Message, Title, ExpireIn,
      Option: {Type}
    });
  }

  Toast(Message: string, Title?: string, ExpireIn = 4000, Type: NotificationType = NotificationType.None) {
    this.NotifySubject.next({
      Way: NotificationWay.Toast, Message, Title, ExpireIn,
      Option: {Type, Position: 'test'}
    });
  }

  Clear() {
    this.NotifySubject.next();
  }
}

