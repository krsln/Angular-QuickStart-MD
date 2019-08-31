import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './Home.Routing.Module';
import {SharedModule} from '../../Shared/Shared.Module';
import {ContactComponent, CustomerComponent, HomeComponent, MapPlanetaryComponent} from './Components';

@NgModule({
  declarations: [HomeComponent, ContactComponent, CustomerComponent, MapPlanetaryComponent],
  exports: [],
  imports: [CommonModule, ReactiveFormsModule, HomeRoutingModule, SharedModule],
  providers: []
})
export class HomeModule {
}
