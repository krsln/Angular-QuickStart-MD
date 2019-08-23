import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {StorageType, WebStorage} from '../Utilities';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private CustomerChanged = new Subject<any>();

  Customer: any = null;
  Changed = this.CustomerChanged.asObservable();
  Authenticated = new Subject<boolean>();

  constructor() {
  }

  Register(customer: any, password: string) {
    if (this.IsExist(customer.IdentificationNumber)) {
      // warning
    } else {
      // reg
    }
  }

  Login(Username: string, Password: string): void {
    console.log(Username, Password);
    // this.client.Account.Login({Username, Password}).subscribe((response) => {
    //   if (response.Response.IsSuccess) {
    // console.log(response);
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    // this.Customer = response.Customer;
    this.Customer = {FirstName: 'Aslı', LastName: 'Kayboldu'};
    WebStorage.Set(StorageType.Local, 'Auth', this.Customer, 60);
    this.CustomerChanged.next(this.Customer);
    this.Authenticated.next(true);
    // }
    // });
  }

  IsAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('IsAuthenticated', this.Customer, WebStorage.Get(StorageType.Local, 'Auth') !== null);
        this.Customer = WebStorage.Get(StorageType.Local, 'Auth');
        resolve(this.Customer !== null);
      }, 1000);
    });
  }

  Logout() {
    WebStorage.Remove(StorageType.Local, 'Auth');
    this.Customer = null;
    this.CustomerChanged.next(null);
    this.Authenticated.next(false);
  }

  IsExist(IdentificationNumber: string): boolean {
    return false;
  }
}
