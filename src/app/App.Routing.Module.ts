import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';

import {PathResolveService} from './Core/Services';
import {PageNotFoundComponent} from './Shared/Components';
import {LayoutZeroComponent as Layout} from './Layouts/layout-zero/layout-zero.component';

const routes: Routes = [
  // App routes goes here here
  // Lazy Load the modules
  {
    path: 'Home', component: Layout,
    loadChildren: () => import('./Modules/Home/home.module').then(mod => mod.HomeModule)
  },

  {
    path: '', component: Layout, children: [
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
      enableTracing: false,
      preloadingStrategy: PreloadAllModules // Lazy Loading strategy
    }),
    // RouterModule.forRoot(appRoutes, {useHash: true}) // http://localhost:6200/#/Home
  ],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
