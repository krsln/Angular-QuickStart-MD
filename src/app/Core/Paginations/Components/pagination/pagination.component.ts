import {Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewEncapsulation} from '@angular/core';
import {PagerService} from '../../Pager.Service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() InputItems: any[];
  @Input() CurrentPage: number;
  pager: any = {};
  pagedItems: any[];
  @Output() PagedItems = new EventEmitter<any[]>();
  @Output() CurrentPageChanged = new EventEmitter<number>();

  constructor(private pagerService: PagerService) {
  }

  ngOnInit() {
  }

  ngOnChanges(...changes: any[]) {
    // console.log('onChange fired', changes);
    if (this.CurrentPage >= 1) {
      this.setPage(this.CurrentPage);
    } else {
      this.setPage(1);
    }
  }

  setPage(page: number) {
    this.pager = this.pagerService.GetPager(this.InputItems.length, page, 10); // get pager object from service
    this.pagedItems = this.InputItems.slice(this.pager.startIndex, this.pager.endIndex + 1);   // get current page of items
    this.PagedItems.emit(this.pagedItems);
    this.CurrentPageChanged.emit(page);
    // console.log('current page of items', this.pagedItems);
  }
}
