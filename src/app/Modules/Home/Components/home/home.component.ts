import {Component, OnInit} from '@angular/core';
import {AlertService} from '../../../../Core/Services';
import {AlertType} from '../../../../Shared/Models/Local';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private  alertService: AlertService) {
  }

  ngOnInit() {
    this.alertService.Success('Home ngOnInit Success alert test', 'Success Yay!');
    this.alertService.Info('Home ngOnInit Info', 'Congratulations!');
    // this.alertService.Error('Home ngOnInit Error');
  }
}
