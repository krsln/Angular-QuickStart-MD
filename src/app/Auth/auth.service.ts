import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';

import {Error, HttpError} from '../Shared/Models';
import {SpinnerService} from '../Core/Notifications/Spinners';
import {AlertService, NotificationType} from '../Core/Notifications/Alerts';
import {AjaxHelper, StorageType, WebStorage} from '../Core/Utilities';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ErrorSubject = new Subject<HttpError>();
  Error = this.ErrorSubject.asObservable();
  User = new BehaviorSubject<any>(null);
  private Timer: any;

  constructor(protected ajax: AjaxHelper, private router: Router
    , private spinnerService: SpinnerService, private  alertService: AlertService) {
  }

  Logout() {
    this.User.next(null);
    WebStorage.Remove(StorageType.Local, 'Auth');
    if (this.Timer) {
      window.clearTimeout(this.Timer);
    }
    this.router.navigate(['/Home']).then();
  }

  Login(Username: string, Password: string): void {
    const spinnerId = this.spinnerService.Show(false);
    this.ajax.HttpPost('ApiHelper.Dip.Path.Account.Login' + '', {Username, Password}, {headers: null, params: null})
      .subscribe((response: any) => {
          if (response) {
            if (response.Response.IsSuccess) {
              const expirationDate = new Date(new Date().getTime() + +'3600' * 1000); // 3600 1H
              // TODO: should come from api...
              WebStorage.Set(StorageType.Local, 'Auth', response.Customer, 60);
              this.AutoLogout(60 * 60 * 1000);
              this.User.next(response.Customer);
            } else {
              const error = response.Response.Error;
              this.alertService.Alert(error.Message, 'Response ' + error.Code, 20 * 1000, NotificationType.Warning);
              this.ErrorSubject.next({...error, Type: 'Response'});
              // console.log(response.Response.Error, ApiHelper.Dip.Path.Account.Login);
            }
          }
        }, (error: Error) => {
          this.alertService.Alert(error.Message, error.Code, 30 * 1000, NotificationType.Error);
          this.ErrorSubject.next({...error, Path: 'ApiHelper.Dip.Path.Account.Login'});
          console.log(error, 'ApiHelper.Dip.Path.Account.Login');
          this.spinnerService.Hide(spinnerId);
        }, () => {
          // console.log('Complete!');
          this.spinnerService.Hide(spinnerId);
        }
      );
  }

  AutoLogout(expirationDate: number) {
    this.Timer = window.setTimeout(() => {
      console.log('AutoLogout');
      this.Logout();
    }, expirationDate);
  }

  AutoLogin() {
    const user = WebStorage.Get(StorageType.Local, 'Auth');
    if (!user) {
      return;
    }
    const expirationDate = new Date(new Date().getTime() + +'3600' * 1000); // 3600 1H
    // TODO: should come from user...
    const token = 'yay';
    if (token) {
      this.User.next(user);
      const expDuration = expirationDate.getTime() - new Date().getTime();
      this.AutoLogout(expDuration);
    }
  }

  // FIXME: Register
  Register(req: any): void {
  }

  // FIXME: ChangePassword
  ChangePassword(req: any): void {
  }

}
