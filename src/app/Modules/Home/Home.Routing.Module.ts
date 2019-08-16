import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutZeroComponent} from '../../Core/Layouts';
import {HomeComponent} from './Components/home/home.component';
import {ContactComponent} from './Components/contact/contact.component';

import {AuthGuard} from '../../Core/Services/Auth.Guard.Service';
import {CanDeactivateGuard} from '../../Core/Guards/Can.Component.Deactivate';

const routes: Routes = [
  {
    path: '',
    component: LayoutZeroComponent,
    children: [
      {path: 'Home', component: HomeComponent, children: []},
      {
        path: 'Contact',
        component: ContactComponent,
        canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        canDeactivate: [CanDeactivateGuard]
      },
    ]
  },
];


@NgModule({
  imports: [
    RouterModule.forChild(routes),
    // RouterModule.forChild(appRoutes, {useHash: true}) // http://localhost:6200/#/Home
  ],
  exports: [RouterModule],
  declarations: []
})
export class HomeRoutingModule {

}
