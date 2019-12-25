import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CanDeactivateGuard} from './Guards';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';

import {AuthInterceptor, TestInterceptor} from './Interceptors';
import {LoggerService, MetaService, PathResolveService,} from './Services';
import {AjaxHelper} from './Utilities';
import {NotificationModule} from './Notifications/notification.module';
import {PaginationModule} from './Paginations/pagination.module';

@NgModule({
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [HttpClientModule, CommonModule, NotificationModule, PaginationModule],
  exports: [NotificationModule, PaginationModule],
  providers: [
    // Guards
    CanDeactivateGuard

    // Utilities
    , AjaxHelper

    // Services
    , MetaService
    , PathResolveService
    , LoggerService

    , {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    , {provide: HTTP_INTERCEPTORS, useClass: TestInterceptor, multi: true}
  ],
})
export class CoreModule {
}
