import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {LayoutZeroComponent, HeaderComponent, FooterComponent} from './Core/Layouts';

import {HomeModule} from './Modules/Home/Home.Module';
import {SharedModule} from './Shared/Shared.Module';
import {AppRoutingModule} from './App.Routing.Module';

import {CanDeactivateGuard} from './Core/Guards/Can.Component.Deactivate';
import {AlertService, AuthGuard, AuthenticationService} from './Core/Services';

@NgModule({
  declarations: [
    AppComponent,

    // Layouts
    LayoutZeroComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule
    , HttpClientModule// import HttpClientModule after BrowserModule.
    , CommonModule

    , FormsModule // Template driven approach
    , ReactiveFormsModule

    , AppRoutingModule
    , SharedModule
    , HomeModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    CanDeactivateGuard
    , AuthGuard
    , AuthenticationService

    , AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
