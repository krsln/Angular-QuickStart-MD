import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutZeroComponent} from '../../Core/Layouts';
import {PathResolveService} from '../../Core/Services';
import {PageNotFoundComponent} from '../../Shared/Components';
import {ContactComponent, HomeComponent, LoginComponent} from './Components';

const routes: Routes = [
  {
    path: 'Home',
    component: LayoutZeroComponent,
    children: [
      {path: '', component: HomeComponent, children: []},
      {path: 'Login', component: LoginComponent},
      {path: 'Contact', component: ContactComponent},
      {path: 'Customer', component: ContactComponent},
      {path: '**', resolve: {path: PathResolveService}, component: PageNotFoundComponent},
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
