import { Component, OnInit, Inject } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { DialogData } from '../../interfaces/DialogData.interface';

@Component({
  selector: 'app-dialog-model',
  templateUrl: './dialog-model.component.html',
  styleUrls: ['./dialog-model.component.scss'],
})
export class DialogModelComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogModelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}
}
