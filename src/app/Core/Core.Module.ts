import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CanDeactivateGuard} from './Guards';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {FooterComponent, HeaderComponent, LayoutZeroComponent} from './Layouts';
import {SharedModule} from '../Shared/Shared.Module';
import {AuthInterceptor, TestInterceptor} from './Interceptors';
import {LoggerService, MetaService, PagerService, PathResolveService, } from './Services';
import {AjaxHelper} from './Utilities';
import {NotificationModule} from './Notifications/notification.module';
import {AuthModule} from './Auth/auth.module';

@NgModule({
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    CommonModule

    , FormsModule // Template driven approach
    , ReactiveFormsModule

    , AuthModule
    , NotificationModule

    , SharedModule
  ],
  exports: [
    SharedModule, NotificationModule
  ],
  providers: [
    // Guards
    CanDeactivateGuard

    // Utilities
    , AjaxHelper

    // Services
    , MetaService
    , PagerService
    , PathResolveService
    , LoggerService

    , {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true}
  ],
})
export class CoreModule {
}
