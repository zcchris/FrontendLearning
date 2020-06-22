import { Component, OnInit } from '@angular/core';
import { Post } from '../../Interfaces/post.interface';
import { PostsService } from '../../service/posts.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts: Post[];
  inputValue: string;
  formGroup = new FormGroup({
    input: new FormControl(''),
  });
  constructor(private postService: PostsService) {}

  ngOnInit(): void {}

  getPosts() {
    this.postService.getPosts().subscribe((posts: Post[]) => {
      this.posts = posts;
      console.log(typeof posts);
    });
  }

  searchFunc() {
    this.postService
      .getPostsWithId(this.formGroup.value.input)
      .subscribe((post: Post) => {
        this.posts = [];
        this.posts.push(post);
      });
  }
}
