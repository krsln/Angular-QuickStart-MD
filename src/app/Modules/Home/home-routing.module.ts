import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactComponent, CustomerComponent, HomeComponent} from './Components';
import {AuthGuard} from '../../Auth';
import {CanDeactivateGuard} from '../../Core/Guards';
import {PathResolveService} from '../../Core/Services/Base';
import {PageNotFoundComponent} from '../../Shared/Components';

const routes: Routes = [
  {
    path: '', // Home Removed for Lazy-Loading look: src/App.Routing.Module.ts
    // component: LayoutZeroComponent,
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
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
