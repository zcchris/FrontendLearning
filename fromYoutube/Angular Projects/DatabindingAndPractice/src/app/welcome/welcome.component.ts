import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WelPopupComponent } from '../wel-popup/wel-popup.component';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  fontStyle = {
    backgroundColor: 'black',
  };
  constructor(private dialog: MatDialog) {}

  ngOnInit(): void {
    setInterval(() => {
      this.fontStyle.backgroundColor =
        '#' + Math.floor(Math.random() * 16777215).toString(16);
    }, 100);
  }
  openDialog() {
    const dialogRef = this.dialog.open(WelPopupComponent);
  }
}
