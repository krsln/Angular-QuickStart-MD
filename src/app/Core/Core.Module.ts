import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CanDeactivateGuard} from './Guards';
import {
  AlertService,
  AuthenticationService,
  AuthGuardService,
  PagerService,
  PathResolveService,
  SpinnerOverlayService,

} from './Services';
import {AjaxHelper} from './Utilities';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../Shared/Shared.Module';
import {FooterComponent, HeaderComponent, LayoutZeroComponent} from './Layouts';

@NgModule({
  declarations: [

  ],
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
  ],
})
export class CoreModule {
}
