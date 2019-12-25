import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import {HomeRoutingModule} from './home-routing.module';

import {ContactComponent, CustomerComponent, HomeComponent, MapPlanetaryComponent} from './Components';
import {SharedModule} from '../../Shared/Shared.Module';

@NgModule({
  declarations: [HomeComponent, ContactComponent, CustomerComponent, MapPlanetaryComponent],
  imports: [CommonModule, ReactiveFormsModule, SharedModule, HomeRoutingModule]
})
export class HomeModule {
}
