import { Component, OnInit, ElementRef } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../interface/post.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  constructor(private service: PostsService, private eleRef: ElementRef) {}

  ngOnInit(): void {}

  fetchPosts() {
    this.service.getPosts().subscribe((data) => {
      this.posts = data;
      // way to get DOM element in component
      console.log(this.eleRef.nativeElement);
    });
  }
}
