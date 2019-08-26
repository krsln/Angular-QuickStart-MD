import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CanDeactivateGuard} from './Guards';
import {
  AlertService,
  AuthGuardService,
  HttpInterceptorService,
  PagerService,
  PathResolveService,
  SpinnerOverlayService,

  AuthenticationService,
} from './Services';
import {AjaxHelper} from './Utilities';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../Shared/Shared.Module';
import {FooterComponent, HeaderComponent, LayoutZeroComponent} from './Layouts';
import {HTTP_INTERCEPTORS} from '@angular/common/http';

@NgModule({
  declarations: [],
  schemas: [NO_ERRORS_SCHEMA],
  imports: [
    OverlayModule,
    CommonModule

    , FormsModule // Template driven approach
    , ReactiveFormsModule

    , SharedModule
  ],
  exports: [
    SharedModule,

  ],
  providers: [
    // Guards
    CanDeactivateGuard

    // Utilities
    , AjaxHelper

    // Services
    , AlertService
    , AuthGuardService
    , AuthenticationService
    , PagerService
    , PathResolveService
    , SpinnerOverlayService

    , {provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true}
  ],
})
export class CoreModule {
}
