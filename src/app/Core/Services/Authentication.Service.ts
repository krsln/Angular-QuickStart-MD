import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private CustomerChanged = new Subject<any>();

  Customer: any = null;
  Changed = this.CustomerChanged.asObservable();

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
  }

  IsAuthenticated() {
    return new Promise((resolve, reject) => {
      // TODO: //...
      resolve(true);
    });
  }

  Logout() {
    this.Customer = null;
    this.CustomerChanged.next(null);
  }

  IsExist(IdentificationNumber: string): boolean {
    return false;
  }
}
