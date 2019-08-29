import {Component, Input, OnInit} from '@angular/core';
import {HttpError} from '../../Models';

@Component({
  selector: 'app-page-error',
  templateUrl: './page-error.component.html',
  styleUrls: ['./page-error.component.css']
})
export class PageErrorComponent implements OnInit {
  @Input() Error: HttpError;

  constructor() {
  }

  ngOnInit() {
  }

}
