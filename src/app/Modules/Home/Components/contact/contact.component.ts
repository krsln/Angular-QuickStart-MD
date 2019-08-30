import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  ContactForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    this.InitializeForm();
  }

  InitializeForm() {
    this.ContactForm = new FormGroup({
      Name: new FormControl(),
      Email: new FormControl(),
      Subject: new FormControl(),
      Message: new FormControl()
    });
  }

  onSubmit() {
    const model: { Name: string, Email: string, Subject: string, Message: string } = {
      Name: this.ContactForm.get('Name').value,
      Email: this.ContactForm.get('Email').value,
      Subject: this.ContactForm.get('Subject').value,
      Message: this.ContactForm.get('Message').value
    };
    // this.ContactForm.get('Name').setValue('');
    // this.ContactForm.get('Email').setValue('');
    // this.ContactForm.get('Subject').setValue('');
    // this.ContactForm.get('Message').setValue('');
    this.ContactForm.reset();
    console.log('onSubmit', model);
  }

}
