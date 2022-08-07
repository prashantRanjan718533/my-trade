import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
export interface StateData {
    T: string;
    v: any;
    vw: any,
    o: any,
    c: any,
    h: any,
    l: any,
    t: any,
    n: any
}

/**
 * @title Dialog Overview
 */

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: StateData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
