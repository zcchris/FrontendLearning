import { Component, OnInit } from '@angular/core';
import { PostsService } from '../../service/posts.service';
import { Post } from '../../interfaces/post.interface';

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
    this.service.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
}
