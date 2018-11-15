import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemandListComponent } from './demand-list/demand-list.component';
import { DemandDetailComponent } from './demand-detail/demand-detail.component';
import { DemandsComponent } from './demands.component';
import { DemandsRoutingModule } from './demands-routing.module';
import { SharedModule } from '../shared';
import { DemandItemComponent } from './demand-item/demand-item.component';
import { CommentListComponent } from '../comment/comment-list/comment-list.component';

@NgModule({
  imports: [
    CommonModule,
    DemandsRoutingModule,
    SharedModule
  ],
  declarations: [
    DemandsComponent, 
    DemandListComponent, 
    DemandDetailComponent, 
    DemandItemComponent, 
    CommentListComponent
  ]
})
export class DemandsModule { }
