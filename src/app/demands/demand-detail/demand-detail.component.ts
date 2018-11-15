import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {DemandService} from '../shared/demand.service';
import {switchMap} from 'rxjs/internal/operators';
import {Observable} from 'rxjs';
import {Demand} from '../shared/demand.model';

@Component({
  selector: 'app-demand-detail',
  templateUrl: './demand-detail.component.html',
  styleUrls: ['./demand-detail.component.css']
})
export class DemandDetailComponent implements OnInit {
  demand: Demand;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe((data:{demand: Demand})=>{
      this.demand = data.demand;
    })
  }

}
