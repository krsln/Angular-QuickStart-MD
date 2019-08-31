import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {PathResolveService} from '../../Core/Services';
import {CanDeactivateGuard} from '../../Core/Guards';
import {LayoutZeroComponent} from '../../Core/Layouts';
import {ContactComponent, CustomerComponent, HomeComponent} from './Components';
import {PageNotFoundComponent} from '../../Shared/Components';
import {AuthGuard} from '../../Auth';

const routes: Routes = [
  {
    path: '', // Home Removed for Lazy-Loading look: src/App.Routing.Module.ts
    component: LayoutZeroComponent,
    children: [
      {path: '', component: HomeComponent, children: []},
      {path: 'Contact', component: ContactComponent},
      {
        path: 'Customer', component: CustomerComponent,
        canActivate: [AuthGuard], canActivateChild: [AuthGuard], canDeactivate: [CanDeactivateGuard]
      },
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
