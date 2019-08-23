import {Component, OnInit, ViewChild} from '@angular/core';
import {AlertService, AuthenticationService, SpinnerOverlayService} from '../../../../Core/Services';
import {ModalComponent} from 'src/app/Shared/Components';
import {StorageType, WebStorage} from '../../../../Core/Utilities';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('modal1', {static: true}) modal1: ModalComponent;

  constructor(private alertService: AlertService, private authService: AuthenticationService, private  overlayService: SpinnerOverlayService) {
  }

  ngOnInit() {
    this.alertService.Success('Home ngOnInit Success alert test', 'Success Yay!');
    this.alertService.Info('Home ngOnInit Info', 'Congratulations!');
    // this.alertService.Error('Home ngOnInit Error');
  }

  Store(where: string, remove: boolean = false) {
    if (where === 'local') {
      if (remove) {
        WebStorage.Remove(StorageType.Local, 'TestLocal');
      } else {
        console.log(WebStorage.Set(StorageType.Local, 'TestLocal', 'Test Local Value'));
      }
    } else if (where === 'session') {
      if (remove) {
        WebStorage.Remove(StorageType.Session, 'TestSession');
      } else {
        console.log(WebStorage.Set(StorageType.Session, 'TestSession', 'Test Session Value'));
      }
    } else if (where === 'cookie') {
      if (remove) {
        WebStorage.Remove(StorageType.Cookie, 'TestCookie');
      } else {
        console.log(WebStorage.Set(StorageType.Cookie, 'TestCookie', 'Test Cookie Value'));
      }
    }
  }

  Check(where: string) {
    if (where === 'local') {
      console.log(WebStorage.Get(StorageType.Local, 'TestLocal'));
    } else if (where === 'session') {
      console.log(WebStorage.Get(StorageType.Session, 'TestSession'));
    } else if (where === 'cookie') {
      console.log(WebStorage.Get(StorageType.Cookie, 'TestCookie'));
    }
  }

  onLogin() {
    console.log('Customer login ...');
    this.authService.Login('Krsln', 'p');
    this.authService.Changed.subscribe(result => {
      console.log('..: ', result);
    });
    this.overlayService.show('Test');
    setTimeout(() => {
      this.overlayService.hide();
    }, 2000);
  }

  onLogout() {
    WebStorage.Remove(StorageType.Local, 'SaleRequest');
    WebStorage.Remove(StorageType.Local, 'BasketCode');

    console.log('Customer logout ...');
    this.authService.Logout();
    this.modal1.Dynamic = {Active: true, TitleContent: 'Customer logout', BodyContent: 'whyyy!', FooterContent: ''};
    this.modal1.Show();
  }
}
