import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AlertService, SpinnerService, ModalService} from '../../../../Core/Notifications';
import {Guid, StorageType, WebStorage} from '../../../../Core/Utilities';
import {AuthService} from '../../../../Auth';
import {NotificationType} from '../../../../Core/Notifications/Alerts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  constructor(private alertService: AlertService, private authService: AuthService,
              private modalService: ModalService, private  spinnerService: SpinnerService) {
  }

  ngOnInit() {
    // this.NotificationTest();
    const e = Guid.NewGuid();
    console.log(e); // ​​​​​Guid { Value: 'bb90ef83-1a7e-42b1-90ba-39cdebb6366c' }​​​​​
  }

  NotificationTest() {
    this.alertService.Alert('Home ngOnInit Success alert test', 'Success Yay!', 20000, NotificationType.Success);

    setTimeout(() => {
      this.alertService.Alert('Message', 'Title!', 5000, NotificationType.None);
    }, 300);
    setTimeout(() => {
      this.alertService.Toast('Message', 'Title!', 9000, NotificationType.None);
    }, 500);
    setTimeout(() => {
      this.alertService.Toast('Message Toast', 'Toast!', 2000, NotificationType.Success);
    }, 800);

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
    // console.log('Customer login ...');
    this.authService.Login('Krsln', 'p');
    this.authService.User.subscribe(result => {
      // console.log('..: ', result);
      // this.modalService.Show('Customer login', 'you logged in yay!');
    });
    const spinnerId = this.spinnerService.Show(false, 'Test');
    setTimeout(() => {
      this.spinnerService.Hide(spinnerId);
    }, 2000);
  }

  onLogout() {
    WebStorage.Remove(StorageType.Local, 'SaleRequest');
    WebStorage.Remove(StorageType.Local, 'BasketCode');

    // console.log('Customer logout ...');
    this.authService.Logout();
    this.modalService.Show('Customer logout', 'whyyy!');
  }

  onOverlay() {
    const id = this.spinnerService.Show(true);
    setTimeout(() => {
      this.spinnerService.Hide(id);
    }, 3000);
  }

  GoToCart() {
    this.modalService.GoToCart();
  }
}
