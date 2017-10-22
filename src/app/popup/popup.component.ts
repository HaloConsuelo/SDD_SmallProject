import { Component, OnInit, Inject, OnChanges, Input } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';


@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css'],
  providers: []
})
export class PopupComponent {
  someValue = false;

  constructor(
    public dialogRef: MatDialogRef<PopupComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close(this.someValue);
  }

}

@Component({
  selector: 'app-button',
  templateUrl: './popup.component.button.html'
})

export class DialogOverviewButtonComponent {
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
