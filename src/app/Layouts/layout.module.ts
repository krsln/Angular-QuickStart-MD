import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {LayoutZeroComponent} from './layout-zero/layout-zero.component';
import {HeaderComponent} from './header/header.component';
import {NotificationModule} from '../Core/Notifications/notification.module';
import {FooterComponent} from './footer/footer.component';

@NgModule({
  declarations: [LayoutZeroComponent, HeaderComponent, FooterComponent],
  exports: [LayoutZeroComponent],
  imports: [CommonModule, RouterModule, NotificationModule]
})
export class LayoutModule {
}
