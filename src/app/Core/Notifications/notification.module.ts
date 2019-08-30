import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AlertComponent} from './Alerts';
import {ModalComponent} from './Modals';
import {SpinnerComponent, SpinnerOverlayComponent} from './Spinners';

import {AlertService, ModalService, SpinnerService} from './';

@NgModule({
  declarations: [
    AlertComponent, ModalComponent, SpinnerComponent, SpinnerOverlayComponent
  ],
  entryComponents: [
    SpinnerComponent, SpinnerOverlayComponent
  ],
  providers: [
    AlertService, ModalService, SpinnerService
  ],
  exports: [
    AlertComponent, ModalComponent, SpinnerComponent, SpinnerOverlayComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NotificationModule {
}
