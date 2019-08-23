import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService, AuthenticationService} from '../../../../Core/Services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  returnUrl: string;

  IsAuthenticated = false;
  IsLoading = false;
  IsNavigated: Promise<boolean>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authService: AuthenticationService,
    private alertService: AlertService) {
  }

  ngOnInit() {
    this.authService.Authenticated.subscribe((authenticated: boolean) => {
      // console.log('authService.Authenticated', authenticated);
      this.IsAuthenticated = authenticated;
    });
    // reset login status
    // this.authService.Logout();
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/Home';
    console.log('returnUrl', this.returnUrl);
  }

  LogMeIn() {
    this.IsLoading = true;
    this.authService.Login(this.model.username, this.model.password);
    this.authService.Changed.subscribe(result => {
      console.log('LogMeIn authService.Changed', result);
      this.IsNavigated = this.router.navigate([this.returnUrl]);
      this.IsLoading = false;
    }, error => {
      this.alertService.Error(error);
      this.IsLoading = false;
    });
  }
}
