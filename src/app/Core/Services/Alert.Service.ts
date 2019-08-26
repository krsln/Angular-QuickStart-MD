import {Injectable} from '@angular/core';
import {NavigationStart, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';

import {Notification, NotificationOption, NotificationType, NotificationWay} from '../../Shared/Models';

@Injectable({providedIn: 'root'})
export class AlertService {
  private subject = new Subject<Notification>();
  private options: NotificationOption = {
    Way: NotificationWay.Toast, Type: NotificationType.None,
    KeepAfterRouteChange: false, Position: 'position'
  };

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.options.KeepAfterRouteChange) {
          // only keep for a single route change
          this.options.KeepAfterRouteChange = false;
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

  Success(message: string, title?: string): void;
  Success(message: string, title?: string, keepAfterRouteChange: boolean = false): void {
    this.Alert(message, title, {
      Way: NotificationWay.Alert, Type: NotificationType.Success,
      KeepAfterRouteChange: keepAfterRouteChange, Position: ''
    });
  }

  Error(message: string, title?: string): void;
  Error(message: string, title?: string, keepAfterRouteChange: boolean = false): void {
    this.Alert(message, title, {
      Way: NotificationWay.Alert, Type: NotificationType.Error,
      KeepAfterRouteChange: keepAfterRouteChange, Position: ''
    });
  }

  Info(message: string, title?: string): void;
  Info(message: string, title?: string, keepAfterRouteChange: boolean = false): void {
    this.Alert(message, title, {
      Way: NotificationWay.Alert, Type: NotificationType.Info,
      KeepAfterRouteChange: keepAfterRouteChange, Position: ''
    });
  }

  Warning(message: string, title?: string): void;
  Warning(message: string, title?: string, keepAfterRouteChange: boolean = false): void {
    this.Alert(message, title, {
      Way: NotificationWay.Alert, Type: NotificationType.Warning,
      KeepAfterRouteChange: keepAfterRouteChange, Position: ''
    });
  }

  Toast(message: string, title?: string, position: string = 'toast-bottom-center'): void {
    this.Alert(message, title, {
      Way: NotificationWay.Toast, Type: NotificationType.None,
      KeepAfterRouteChange: false, Position: position
    });
  }

  SuccessToast(message: string, title?: string, position: string = 'toast-bottom-center'): void {
    this.Alert(message, title, {
      Way: NotificationWay.Toast, Type: NotificationType.Success,
      KeepAfterRouteChange: false, Position: position
    });
  }

  WarningToast(message: string, title?: string, position: string = 'toast-bottom-center'): void {
    this.Alert(message, title, {
      Way: NotificationWay.Toast, Type: NotificationType.Warning,
      KeepAfterRouteChange: false, Position: position
    });
  }

  ErrorToast(message: string, title?: string, position: string = 'toast-bottom-center'): void {
    this.Alert(message, title, {
      Way: NotificationWay.Toast, Type: NotificationType.Error,
      KeepAfterRouteChange: false, Position: position
    });
  }

  InfoToast(message: string, title?: string, position: string = 'toast-bottom-center'): void {
    this.Alert(message, title, {
      Way: NotificationWay.Toast, Type: NotificationType.Info,
      KeepAfterRouteChange: false, Position: position
    });
  }


  Alert(message: string, title?: string, way?: { Way: NotificationWay, Type: NotificationType }) ;
  Alert(message: string, title?: string, options?: NotificationOption) ;
  Alert(message: string, title?: string, optionsWay?: NotificationOption | { Way: NotificationWay, Type: NotificationType }) {
    if (optionsWay) {
      if (optionsWay.hasOwnProperty('KeepAfterRouteChange')) {
        this.options = optionsWay as NotificationOption;
      } else {
        this.options = {Way: optionsWay.Way, Type: optionsWay.Type, KeepAfterRouteChange: false, Position: ''};
      }
    }
    this.subject.next({Title: title, Message: message, Option: this.options} as Notification);
  }

  Clear() {
    // clear alerts
    this.subject.next();
  }
}

