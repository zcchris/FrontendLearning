import { CommonModule } from '@angular/common';
import { DialogComponent } from './components/dialog/dialog.component';
import { DialogModelComponent } from './components/dialog-model/dialog-model.component';
import { FormsModule } from '@angular/forms';
import { IfIsEmptyPipe } from './pipes/if-is-empty.pipe';
import { MatDialogModule } from '@angular/material/dialog';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [DialogComponent, DialogModelComponent, IfIsEmptyPipe],
  imports: [CommonModule, MatDialogModule, FormsModule],
  exports: [DialogComponent, DialogModelComponent, IfIsEmptyPipe],
})
export class SharedModule {}
