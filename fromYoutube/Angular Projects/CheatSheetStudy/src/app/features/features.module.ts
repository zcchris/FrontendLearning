import { CommonModule } from '@angular/common';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DragExampleComponent } from './components/drag-example/drag-example.component';
import { DragableWindowComponent } from './components/dragable-window/dragable-window.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    HomeComponent,
    DataBindingComponent,
    DragExampleComponent,
    DragableWindowComponent,
  ],
  imports: [CommonModule, SharedModule, FormsModule],
  exports: [
    HomeComponent,
    DataBindingComponent,
    DragExampleComponent,
    DragableWindowComponent,
  ],
})
export class FeaturesModule {}
