import {Injectable} from '@angular/core';
import {StorageType, WebStorage} from '../Utilities';
import {BehaviorSubject, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {HttpError} from '../../Shared/Models';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private ErrorSubject = new Subject<HttpError>();
  Error = this.ErrorSubject.asObservable();
  private Timer: any;
  User = new BehaviorSubject<any>(null);

  constructor(private router: Router) {
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
    console.log(Username, Password);
    const customer = {FirstName: 'Aslı', LastName: 'Kayboldu'};
    WebStorage.Set(StorageType.Local, 'Auth', customer, 60);
    this.AutoLogout(60 * 60 * 1000);
    this.User.next(customer);
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

  Register(req: any): void {

  }

  ChangePassword(req: any): void {

  }

}
