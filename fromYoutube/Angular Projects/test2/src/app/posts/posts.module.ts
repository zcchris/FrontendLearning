import { NgModule } from '@angular/core';
import { PostsComponent } from './posts/posts.component';
import { DataComponent } from './data/data.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [PostsComponent, DataComponent],
  imports: [CommonModule, SharedModule],
  exports: [PostsComponent, DataComponent],
})
export class PostsModule {}
