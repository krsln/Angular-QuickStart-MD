import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';

import {FileSizePipe, FilterPipe, SanitizeHtmlPipe, TruncatePipe} from './Pipes';
import {
  PageErrorComponent,
  PageNotFoundComponent,
} from './Components';

@NgModule({
  declarations: [
    /* Pipes */
    TruncatePipe,
    FilterPipe,
    FileSizePipe,
    SanitizeHtmlPipe,

    /* Directives */

    /* Components */
    PageNotFoundComponent,
    PageErrorComponent,
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
    PageNotFoundComponent,
    PageErrorComponent,
  ]
})
export class SharedModule {

}
