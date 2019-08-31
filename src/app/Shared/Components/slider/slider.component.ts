import {AfterViewInit, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {View} from '../../Models';

declare var $;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit, AfterViewInit {
  @Input() Views: View[];
  @Input() NoDesc = false;
  Id: string;

  constructor() {
    this.Id = 'div_img'
      + '_' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10)
      + '_' + Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 10);
  }

  ngOnInit() {
    // console.log(this.Views);
  }

  ngAfterViewInit() {
    /*!--[ngClass]="{'active' : i == 0}"--> before*/
    // active css class caused some problem, glitches
    $('#' + this.Id + ' .carousel-item:first-child').addClass('active');
  }

  Next() {
    $('#' + this.Id).carousel('next');
  }

  Prev() {
    $('#' + this.Id).carousel('prev');
  }

}
