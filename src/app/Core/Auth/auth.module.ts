import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AuthComponent, AuthGuard, AuthService, AuthRoutingModule} from './';
import {SharedModule} from '../../Shared/Shared.Module';

@NgModule({
  declarations: [AuthComponent],
  // exports: [AuthComponent],
  imports: [
    CommonModule, FormsModule,

    AuthRoutingModule,
    SharedModule,
  ],
  providers: [AuthService, AuthGuard]
})
export class AuthModule {
}
