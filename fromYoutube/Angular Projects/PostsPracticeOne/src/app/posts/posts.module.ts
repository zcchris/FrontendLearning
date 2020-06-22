import { NgModule } from '@angular/core';
import { PostsComponent } from './components/posts/posts.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [PostsComponent],
})
export class PostsModule {}
