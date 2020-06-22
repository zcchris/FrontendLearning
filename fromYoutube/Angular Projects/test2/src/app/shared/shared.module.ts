import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MyPipe } from './pipes/my.pipe';
import { MyDirective } from './directives/my.directive';
@NgModule({
  declarations: [MyPipe, MyDirective],
  imports: [CommonModule],
  exports: [HttpClientModule, MyPipe, MyDirective],
})
export class SharedModule {}
