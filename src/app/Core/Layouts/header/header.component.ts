import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../Services';
import {StorageType, WebStorage} from '../../Utilities';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  IsAuthenticated = false;
  Count: number;
  Customer: any;

  // private cartService: ShoppingCartService;
  constructor(private authService: AuthenticationService) {
  }

  ngOnInit() {
    this.Customer = WebStorage.Get(StorageType.Local, 'Auth');
    // console.log(this.Customer);
    // this.cartService.Set(null);
    // this.Count = this.cartService.SaleRequest.Sales.length;
    // this.cartService.Changed.subscribe((saleReq) => {
    //   this.Count = saleReq.Sales.length;
    // });

    this.authService.IsAuthenticated().then((authenticated: boolean) => {
      this.IsAuthenticated = authenticated;
    });
    this.authService.Authenticated.subscribe((authenticated: boolean) => {
      console.log('authService.Authenticated', authenticated);
      this.IsAuthenticated = authenticated;
    });
    this.authService.Changed.subscribe(customer => {
      console.log('authService.Changed', customer);
      this.Customer = customer;
    });

    if (this.IsAuthenticated) {
      this.Customer = WebStorage.Get(StorageType.Local, 'Auth');
      console.log('this.IsAuthenticated', this.Customer);
    }
  }

  onLogout() {
    // console.log('Customer logout ...');
    this.authService.Logout();
  }

}
