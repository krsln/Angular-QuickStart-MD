import {Component, Input, OnInit} from '@angular/core';
import {Guid} from '../../../Utilities';

@Component({
  selector: 'app-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.css']
})
export class SpinnerOverlayComponent implements OnInit {
  @Input() public message: string;
  Id = 'Spinner_' + Guid.NewGuid().ToString();

  constructor() {
  }

  ngOnInit() {
  }

}
