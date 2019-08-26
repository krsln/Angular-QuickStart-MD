import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertService} from '../../../Core/Services';
import {Notification, NotificationType, NotificationWay} from '../../Models';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  Notifications: Notification [] = [];
  Interval;

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.GetAlert().subscribe((notification: Notification) => {
      if (!notification) {
        // clear alerts when an empty alert is received
        this.Notifications = [];
        return;
      }
      // add alert to array
      this.Notifications.push(notification);
      setTimeout(() => {
        this.RemoveAlert(notification);
      }, 6000);
    });
  }

  RemoveAlert = (alert: Notification) => this.Notifications = this.Notifications.filter(x => x !== alert);

  CssClass(notification: Notification) {
    if (!notification) {
      return;
    }
    // return css class based on alert type
    if (notification.Option.Way === NotificationWay.Alert) {
      switch (notification.Option.Type) {
        case NotificationType.None:
          return 'alert alert-light';
        case NotificationType.Success:
          return 'alert alert-success';
        case NotificationType.Error:
          return 'alert alert-danger';
        case NotificationType.Info:
          return 'alert alert-info';
        case NotificationType.Warning:
          return 'alert alert-warning';
      }
    } else {
      switch (notification.Option.Type) {
        case NotificationType.Success:
          return 'bg-success';
        case NotificationType.Error:
          return 'bg-danger';
        case NotificationType.Info:
          return 'bg-info';
        case NotificationType.Warning:
          return 'bg-warning';
      }
    }
  }

  // ToastPosition(notification: Notification) {
  //   const right = ['float: right;' ];
  //   const rightd =  'float: right; min-width: 350px;' ;
  //   if (notification.Option) {
  //     if (notification.Option.Position === 'Right') {
  //       return right;
  //     }
  //   }
  // }

  // GetAlertType(alert: Alert) {
  //   return AlertType[alert.Type].toString();
  // }

  ngOnDestroy(): void {
    clearInterval(this.Interval);
  }
}

