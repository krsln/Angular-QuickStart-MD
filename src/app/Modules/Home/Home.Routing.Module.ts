import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutZeroComponent} from '../../Core/Layouts';
import {PathResolveService} from '../../Core/Services';
import {PageNotFoundComponent} from '../../Shared/Components';
import {ContactComponent, HomeComponent} from './Components';

const routes: Routes = [
  {
    path: 'Home',
    component: LayoutZeroComponent,
    children: [
      {path: '', component: HomeComponent, children: []},
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
