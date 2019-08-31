import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {AuthService} from '../../../Auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  Subscription: Subscription;
  SubscriptionSale: Subscription;
  IsAuthenticated = false;
  Count: number;
  Customer: any;

  // private cartService: ShoppingCartService;
  constructor(private authService: AuthService) {
  }

  ngOnInit() {
    // const refreshed = this.saleService.Refresh(null);
    // if (refreshed) {
    //   this.Count = refreshed.Sales.length;
    // }
    // this.SubscriptionSale = this.saleService.SaleChanged.subscribe((req) => {
    //   this.Count = req.Sales.length;
    // });

    this.Subscription = this.authService.User.subscribe((user) => {
      this.Customer = user;
      this.IsAuthenticated = !!user;
    });

  }

  onLogout() {
    this.authService.Logout();
  }

  ngOnDestroy(): void {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
      // this.SubscriptionSale.unsubscribe();
    }
  }

}
