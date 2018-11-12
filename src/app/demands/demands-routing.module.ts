import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemandListComponent } from './demand-list/demand-list.component';
import {DemandDetailComponent} from './demand-detail/demand-detail.component';
import { AuthGuard } from '../auth/auth.guard'
import { DemandDetailResolverService } from './demand-detail/demand-detail-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: DemandListComponent
  },
  {
      path: 'list',
      component: DemandListComponent
  },
  {
      path: 'unread',
      component: DemandListComponent
  },
  {
      path: 'favorite',
      component: DemandListComponent,
      canActivate: [AuthGuard]
  },
  {
    path: 'detail/:id',
    component: DemandDetailComponent,
    resolve: {
      demand: DemandDetailResolverService
    }
  },
  {
    path: '*',
    component: DemandListComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [],
  exports: [ RouterModule ]
})
export class DemandsRoutingModule { }
