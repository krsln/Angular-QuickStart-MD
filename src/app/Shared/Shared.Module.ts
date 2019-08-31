import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

import {FileSizePipe, FilterPipe, SanitizeHtmlPipe, TruncatePipe} from './Pipes';
import {SliderComponent, PageNotFoundComponent} from './Components';
import {PaginationModule} from '../Core/Paginations/pagination.module';

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
    SliderComponent,
  ],
  imports: [
    CommonModule
    , RouterModule
    , ReactiveFormsModule
    , PaginationModule
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
    SliderComponent,
  ]
})
export class SharedModule {

}
