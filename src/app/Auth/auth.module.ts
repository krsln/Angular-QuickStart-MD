import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {AuthComponent, AuthGuard, AuthService} from './index';
import {NotificationModule} from '../Core/Notifications/notification.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    FormsModule,

    RouterModule.forChild([{path: 'Auth', component: AuthComponent}]),
    NotificationModule,
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
}
