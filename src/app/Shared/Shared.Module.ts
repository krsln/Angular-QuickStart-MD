import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {FileSizePipe, FilterPipe, SanitizeHtmlPipe, TruncatePipe} from './Pipes';
import {AlertComponent} from './Components';

@NgModule({
  declarations: [
    /* Pipes */
    TruncatePipe,
    FilterPipe,
    FileSizePipe,
    SanitizeHtmlPipe,

    /* Directives */

    /* Components */
    AlertComponent,

  ],
  imports: [
    CommonModule
    , BrowserModule
    , RouterModule
    , ReactiveFormsModule
    , FormsModule
  ],
  providers: [],
  exports: [
    CommonModule,

    /* Pipes */
    TruncatePipe,
    FilterPipe,
    FileSizePipe,
    SanitizeHtmlPipe,

    /* Directives */

    /* Components */
    AlertComponent,

  ]
})
export class SharedModule {

}