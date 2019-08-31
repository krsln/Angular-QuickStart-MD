import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './App.Routing.Module';
import {AppComponent} from './app.component';
import {FooterComponent, HeaderComponent, LayoutZeroComponent} from './Core/Layouts';
import {CoreModule} from './Core/Core.Module';
import {AuthModule} from './Auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    // Layouts
    LayoutZeroComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    BrowserModule.withServerTransition({ appId: 'serverApp' }),

    AuthModule, CoreModule

    // , HomeModule

    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
