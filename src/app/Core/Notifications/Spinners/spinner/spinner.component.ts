import {Component, Input, OnInit} from '@angular/core';
import {Guid} from '../../../Utilities';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  @Input() message = '';
  Id = 'Spinner_' + Guid.NewGuid().ToString();

  constructor() {
  }

  ngOnInit() {
  }

}
