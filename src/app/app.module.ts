import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppComponent} from './app.component';
import {HeaderComponent} from './Layouts/header/header.component';
import {HomeComponent} from './C/home/home.component';
import {LayoutBasicComponent} from './Layouts/layout-basic/layout-basic.component';

import {AppRoutingModule} from './App.Routing.Module';
import {SharedModule} from './Shared.Module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LayoutBasicComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot()
    , HttpClientModule// import HttpClientModule after BrowserModule.
    , CommonModule

    , FormsModule // Template driven approach
    , ReactiveFormsModule

    , AppRoutingModule
    , SharedModule
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
