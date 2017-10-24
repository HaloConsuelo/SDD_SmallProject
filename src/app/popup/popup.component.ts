import { Component, OnInit, Inject, OnChanges, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  providers: []
})
export class PopupComponent {

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

}

@Component({
  selector: 'app-button',
  templateUrl: './popup.component.button.html'
})

export class PopupButtonComponent {
  @Input('convertedHTML')
  convertedHTML = '';
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    let dialogRef = this.dialog.open(PopupComponent, {
      data: { convertedHTML: this.convertedHTML },
      width: '250px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
