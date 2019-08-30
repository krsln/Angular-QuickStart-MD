import {AfterContentInit, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges} from '@angular/core';
import {AlertService} from '../Alert.Service';
import {Notification, NotificationType, NotificationWay} from '../Models';

import {Observable, timer, NEVER, BehaviorSubject, fromEvent, of} from 'rxjs';
import {map, tap, takeWhile, share, startWith, switchMap, filter} from 'rxjs/operators';
import {Guid} from '../../../Utilities';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit, OnDestroy {
  Notifications: { Notification: Notification, Id: string } [] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.Notify.subscribe((notification: Notification) => {
      if (!notification) {
        // clear alerts when an empty alert is received
        this.Notifications = [];
        return;
      }
      const n = {Notification: notification, Id: 'Notify_' + Guid.NewGuid().ToString()};
      this.Notifications.push(n);
      // console.log('Notify', notification.ExpireIn, notification.Option);

      setTimeout(() => {
        this.Countdown(n.Id, n.Notification.ExpireIn);
      }, 200);
      setTimeout(() => {
        this.RemoveAlert(notification);
      }, notification.ExpireIn);
    });
  }

  Countdown(divId: string, TIME: number) {
    const toggle$ = new BehaviorSubject(true);

    const K = 1000;
    const INTERVAL = K;
    // const MINUTES = 0.1;
    // const TIME = MINUTES * K * 60;

    let current: number;
    const time = TIME;

    const toMinutesDisplay = (ms: number) => Math.floor(ms / K / 60);
    const toSecondsDisplay = (ms: number) => Math.floor(ms / K) % 60;

    const toSecondsDisplayString = (ms: number) => {
      const seconds = toSecondsDisplay(ms);
      return seconds < 10 ? `0${seconds}` : seconds.toString();
    };

    const currentSeconds = () => time / INTERVAL;
    const toMs = (t: number) => t * INTERVAL;
    const toRemainingSeconds = (t: number) => currentSeconds() - t;

    const remainingSeconds$ = toggle$.pipe(
      switchMap((running: boolean) => (running ? timer(0, INTERVAL) : NEVER)),
      map(toRemainingSeconds), takeWhile(t => t >= 0)
    );

    const ms$ = remainingSeconds$.pipe(map(toMs), tap(t => current = t));
    const minutes$ = ms$.pipe(map(toMinutesDisplay), map(s => s.toString()), startWith(toMinutesDisplay(time).toString()));
    const seconds$ = ms$.pipe(map(toSecondsDisplayString), startWith(toSecondsDisplayString(time).toString()));

    // update DOM
    const minutesElement = document.querySelector('#' + divId + ' .minutes');
    const secondsElement = document.querySelector('#' + divId + ' .seconds');
    const toggleElement = document.querySelector('#' + divId + ' .timer');
    // console.log(minutesElement, secondsElement, toggleElement);

    updateDom(minutes$, minutesElement);
    updateDom(seconds$, secondsElement);

    // // set click events
    // fromEvent(toggleElement, 'click').subscribe(() => {
    //   toggle$.next(!toggle$.value);
    // });
    // // update current time on clicks
    // toggle$.pipe(
    //   filter((toggled: boolean) => !toggled)
    // ).subscribe(() => {
    //   time = current;
    // });

    remainingSeconds$.subscribe({
      complete: () => updateDom(of('!!!'), toggleElement)
    });

    function updateDom(source$: Observable<string>, element: Element) {
      if (element) {
        source$.subscribe((value) => element.innerHTML = value);
      }
    }
  }

  RemoveAlert = (alert: Notification) => this.Notifications = this.Notifications.filter(x => x.Notification !== alert);

  CssClass(notification: Notification) {
    if (!notification) {
      return;
    }
    // return css class based on alert type
    if (notification.Way === NotificationWay.Alert) {
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

  ngOnDestroy(): void {
  }
}

