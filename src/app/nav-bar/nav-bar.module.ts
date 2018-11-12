import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { SharedModule } from '../shared';
import { DemandNavComponent } from './demand-nav/demand-nav.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [NavBarComponent, DemandNavComponent],
  exports: [NavBarComponent]
})
export class NavBarModule { }
