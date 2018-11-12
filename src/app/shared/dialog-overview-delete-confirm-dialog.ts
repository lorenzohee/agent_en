import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

export interface DialogData{
    title: string;
    text: string;
  }
  
  @Component({
    selector: 'dialog-overview-delete-confirm-dialog',
    templateUrl: 'dialog-overview-delete-confirm-dialog.html'
  })
  export class DialogOverviewDeleteConfirmDialog{
    constructor(public dialogRef: MatDialogRef<DialogOverviewDeleteConfirmDialog>, @Inject(MAT_DIALOG_DATA) public data: DialogData){}
  
    onCancelClick(): void{
      this.dialogRef.close();
    }
  }