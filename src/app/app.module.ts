import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './App.Routing.Module';
import {AppComponent} from './app.component';
import {FooterComponent, HeaderComponent, LayoutZeroComponent} from './Core/Layouts';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './Core/Core.Module';
import {HomeModule} from './Modules/Home/Home.Module';
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
    BrowserModule
    , HttpClientModule// import HttpClientModule after BrowserModule.
    // , CommonModule
    // , FormsModule // Template driven approach
    // , ReactiveFormsModule

    , CoreModule
    , HomeModule
    , AuthModule

    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
