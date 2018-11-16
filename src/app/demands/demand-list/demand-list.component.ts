import { Component, OnInit, Inject } from '@angular/core';
import { Demand } from '../shared/demand.model';
import { DemandService } from '../shared/demand.service';
import { MatDialog} from '@angular/material';
import { DialogOverviewDeleteConfirmDialog } from '../../shared/dialog-overview-delete-confirm-dialog';

@Component({
  selector: 'app-demand-list',
  templateUrl: './demand-list.component.html',
  styleUrls: ['./demand-list.component.css']
})
export class DemandListComponent implements OnInit {

  demands:Demand[] = null;
  error;

  constructor(private demandService: DemandService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getDemandList();
  }

  getDemandList() {
    this.demandService.getDemands().subscribe(resp => {
      this.demands = [...resp];
    },
    error => {
      this.error = error;
    });
  }

  ignoreDemand(demand: Demand) {
    // open the delete confirm dialog
    const dialogRef = this.dialog.open(DialogOverviewDeleteConfirmDialog, {data:{title: '', text: ''}});

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        // invoke http ignore the demand
        this.demandService.ignoreDemand(demand.id, 1).subscribe( result=>{
          let demandIndex = 0;
          this.demands.forEach((v,i)=>{
            if(v.id==result.id){
              demandIndex=i;
              return false;
            }
          })
          this.demands.splice(demandIndex, 1);
        })
      }
    })
  }

}
