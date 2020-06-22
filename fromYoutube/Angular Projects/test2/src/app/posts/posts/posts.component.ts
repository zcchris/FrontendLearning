import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../shared/services/posts.service';
import { Post } from '../../core/interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  constructor(private service: PostsService) {}

  ngOnInit(): void {}
  getPosts() {
    this.service.getPost().subscribe((data: Post[]) => {
      this.posts = data;
    });
  }
}
