import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../../Core/Services';
import {Alert, AlertType} from '../../Models/Local';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {
  Alerts: Alert[] = [];

  constructor(private alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.GetAlert().subscribe((alert: Alert) => {
      if (!alert) {
        // clear alerts when an empty alert is received
        this.Alerts = [];
        return;
      }
      // add alert to array
      this.Alerts.push(alert);
    });
  }

  RemoveAlert = (alert: Alert) => this.Alerts = this.Alerts.filter(x => x !== alert);

  CssClass(alert: Alert) {
    if (!alert) {
      return;
    }
    // return css class based on alert type
    switch (alert.Type) {
      case AlertType.Success:
        return 'alert alert-success';
      case AlertType.Error:
        return 'alert alert-danger';
      case AlertType.Info:
        return 'alert alert-info';
      case AlertType.Warning:
        return 'alert alert-warning';
    }
  }

  // GetAlertType(alert: Alert) {
  //   return AlertType[alert.Type].toString();
  // }
}

