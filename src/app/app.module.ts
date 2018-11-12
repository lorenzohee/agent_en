import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { CoreModule } from './core';
import { AppRoutingModule } from './app-routing.module';
import { NavBarModule } from './nav-bar/nav-bar.module';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { DemandNavComponent } from './nav-bar/demand-nav/demand-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    DemandNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    SharedModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
