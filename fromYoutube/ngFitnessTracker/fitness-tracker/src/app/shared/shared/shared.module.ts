import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from 'src/app/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
  exports: [CommonModule, MaterialModule, FlexLayoutModule, FormsModule],
})
export class SharedModule {}
