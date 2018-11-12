import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Demand } from '../shared/demand.model';
import { Observable, of, EMPTY } from 'rxjs';
import { DemandService } from '../shared/demand.service';
import { take, mergeMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemandDetailResolverService implements Resolve<Demand>{

  constructor(private demandService: DemandService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Demand> | Observable<never>{
    let id = route.paramMap.get('id');
    return this.demandService.getDemandById(id).pipe(
      take(1),
      mergeMap(demand=>{
        if(demand){
          return of(demand);
        }else{
          this.router.navigate(['/demands']);
          return EMPTY;
        }
      })
    )
  }
}
