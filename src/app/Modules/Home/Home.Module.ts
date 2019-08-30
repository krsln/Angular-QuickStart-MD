import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './Home.Routing.Module';
import {SharedModule} from '../../Shared/Shared.Module';
import {ContactComponent, CustomerComponent, HomeComponent } from './Components';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
    CustomerComponent,
  ],
  exports: [
    HomeComponent,
    ContactComponent,
    CustomerComponent,
  ],
  imports: [
    CommonModule

    , FormsModule // Template driven approach
    , ReactiveFormsModule

    , HomeRoutingModule
    , SharedModule
  ],
  providers: []
})
export class HomeModule {
}
