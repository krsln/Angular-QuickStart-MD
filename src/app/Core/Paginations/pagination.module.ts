import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PagerService} from './Pager.Service';
import {PaginationComponent} from './Components/pagination/pagination.component';

@NgModule({
  declarations: [PaginationComponent],
  imports: [CommonModule],
  exports: [PaginationComponent],
  providers: [PagerService]
})
export class PaginationModule {
}
