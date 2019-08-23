import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './Home.Routing.Module';
import {SharedModule} from '../../Shared/Shared.Module';
import {ContactComponent, HomeComponent} from './Components';

@NgModule({
  declarations: [
    HomeComponent,
    ContactComponent,
  ],
  exports: [
    HomeComponent,
    ContactComponent,
  ],
  imports: [
    CommonModule
    , ReactiveFormsModule

    , HomeRoutingModule
    , SharedModule
  ],
  providers: []
})
export class HomeModule {
}
