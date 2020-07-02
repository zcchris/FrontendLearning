import { Component, OnInit } from '@angular/core';

import { DialogModelComponent } from '../dialog-model/dialog-model.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  dialogValue = 'default DialogValue';
  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(DialogModelComponent, {
      data: { dialogValue: this.dialogValue },
    });
  }
}
