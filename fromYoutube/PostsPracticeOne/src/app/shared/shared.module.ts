import { NgModule } from '@angular/core';
import { UppercasePipe } from './pipes/uppercase.pipe';
import { CommonModule } from '@angular/common';
import { MyDDirective } from './directives/my-d.directive';
@NgModule({
  declarations: [UppercasePipe, MyDDirective],
  imports: [CommonModule],
  exports: [UppercasePipe, MyDDirective],
})
export class SharedModule {}
