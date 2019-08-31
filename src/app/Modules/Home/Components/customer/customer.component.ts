import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../../../Core/Guards';
import {Observable} from 'rxjs';
import {AuthService} from '../../../../Auth';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit, CanComponentDeactivate {
  Customer: any;

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    this.authService.User.subscribe(user => {
      this.Customer = user;
      // console.log(this.Customer);
    });
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to discard the changes?');
  }
}
