import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Demand } from '../shared/demand.model';
import { DemandService } from '../shared/demand.service';

@Component({
  selector: 'app-demand-item',
  templateUrl: './demand-item.component.html',
  styleUrls: ['./demand-item.component.css']
})
export class DemandItemComponent implements OnInit {

  @Input() demand: Demand
  @Output() ignoreDem= new EventEmitter<Demand>();

  constructor(private demandService: DemandService) { }

  ngOnInit() {
  }

  favoriteDemand(demand: Demand){
    this.demandService.favoriteDemand(demand.id, 1).subscribe(result=>{
      if(result){
        this.demand.favoriteId = result.id
      }
    })
  }

  unfavoriteDemand(demand: Demand){
    this.demandService.unFavoriteDemand(demand.favoriteId).subscribe(result=>{
      if(result){
        this.demand.favoriteId = null;
      }
    })
  }

  ignoreDemand(demand: Demand){
    this.ignoreDem.emit(demand)
  }

}
