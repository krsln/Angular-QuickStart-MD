import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public hoverImg = '<img src="https://mdbootstrap.com/img/logo/mdb192x192.jpg"/>';
  public clickImg = '<img src="https://mdbootstrap.com/img/Others/documentation/img%20(30)-mini.jpg"/>';
  public smallHoverImg = '<img src="//placehold.it/100x50"/>';
  public smallClickImg = '<img src="//placehold.it/50x50"/>';

  constructor() {
  }

  ngOnInit() {
  }

}
