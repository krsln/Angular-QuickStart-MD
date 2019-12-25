import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './App.Routing.Module';
import {AppComponent} from './app.component';
import {CoreModule} from './Core/Core.Module';
import {AuthModule} from './Auth/auth.module';
import {LayoutModule} from './Layouts/layout.module';
import {SharedModule} from './Shared/Shared.Module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    BrowserModule.withServerTransition({appId: 'serverApp'}),

    LayoutModule,
    AuthModule,
    CoreModule,
    SharedModule,
    // , HomeModule

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
