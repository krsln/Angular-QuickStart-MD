import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutZeroComponent} from '../Core/Layouts/layout-zero/layout-zero.component';
import {AuthComponent} from './auth.component';

const routes: Routes = [
  {path: 'Auth', component: AuthComponent}
  // {
  //   path: '',
  //   component: LayoutZeroComponent,
  //   children: [{path: 'Auth', component: AuthComponent}]
  // },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forChild(appRoutes, {useHash: true}) // http://localhost:6200/#/Home
  ],
  exports: [RouterModule],
  declarations: []
})
export class AuthRoutingModule {
}
