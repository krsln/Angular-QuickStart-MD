import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './C/home/home.component';
import {LayoutBasicComponent} from './Layouts/layout-basic/layout-basic.component';


const routes: Routes = [
  // App routes goes here here
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      {path: '', component: HomeComponent},
      // {
      //   path: 'Test', component: TestComponent, children: [
      //     {path: 'Cart', component: TestSubComponent},
      //   ]
      // },
    ]
  },

  // no layout routes
  // {path: 'Login', component: LoginComponent},

  // otherwise redirect to home
  // { path: '**', redirectTo: '' }
  // , {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // useHash: true, // Tell the router to use the HashLocationStrategy.
      scrollPositionRestoration: 'enabled', // 'disabled' | 'enabled' | 'top'
      enableTracing: false
    }),
    // RouterModule.forRoot(appRoutes, {useHash: true}) // http://localhost:6200/#/Tour
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
