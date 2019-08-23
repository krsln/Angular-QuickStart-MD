import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LayoutZeroComponent} from './Core/Layouts';

import {PathResolveService} from './Core/Services';
import {PageNotFoundComponent} from './Shared/Components';

const routes: Routes = [
  // App routes goes here here
  {
    path: '',
    component: LayoutZeroComponent,
    children: [
      {path: '', redirectTo: '/Home', pathMatch: 'full'},
      {path: '**', resolve: {path: PathResolveService}, component: PageNotFoundComponent},
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true, // Tell the router to use the HashLocationStrategy.
      scrollPositionRestoration: 'enabled', // 'disabled' | 'enabled' | 'top'
      enableTracing: false
    }),
    // RouterModule.forRoot(appRoutes, {useHash: true}) // http://localhost:6200/#/Home
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
