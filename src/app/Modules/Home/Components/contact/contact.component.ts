import {Component, OnInit} from '@angular/core';
import {CanComponentDeactivate} from '../../../../Core/Guards/Can.Component.Deactivate';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, CanComponentDeactivate {

  constructor() {
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to discard the changes?');
  }

  ngOnInit() {
  }

}
