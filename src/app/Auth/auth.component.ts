import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';

import {AuthService} from './auth.service';
import {HttpError} from '../Shared/Models';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit, OnDestroy {
  Subscription: Subscription;
  SubscriptionError: Subscription;

  returnUrl: string;
  Model: { Email?: string, Password?: string } = {};
  IsLoading = false;
  Error: HttpError = null;

  constructor(private authService: AuthService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/Home';

    this.authService.Error.subscribe((error) => {
      this.IsLoading = false;
      this.Error = error;
    });
    this.authService.User.subscribe((user) => {
      this.IsLoading = false;
      // console.log('Auth User', user, this.returnUrl);
      if (user) {
        this.router.navigate([this.returnUrl]).then();
      }
    });
  }

  Submit(form: NgForm) {
    console.log('Submit', this.Model);
    this.Error = null;
    this.IsLoading = true;
    this.authService.Login(this.Model.Email, this.Model.Password);
    form.reset();
  }

  ngOnDestroy(): void {
    if (this.Subscription) {
      this.Subscription.unsubscribe();
      this.SubscriptionError.unsubscribe();
    }
  }

}
