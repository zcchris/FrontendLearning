import { Component, OnInit, Output, Input } from '@angular/core';
import { User } from '../model/user';
import { PostsServiceService } from '../posts-service.service';
import { MatDialog } from '@angular/material/dialog';
import { PostComponent } from '../post/post.component';
import { EventEmitter } from 'protractor';
import { HttpClient } from '@angular/common/http';

const POSTS_COMMENTS = 'https://jsonplaceholder.typicode.com/posts?userId=';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  users: User[];
  isLoaded = false;
  getPostsIsClicked = false;

  constructor(
    private http: HttpClient,
    private service: PostsServiceService,
    public dialog: MatDialog
  ) {
    this.users = [];
  }

  ngOnInit(): void {}

  getPosts() {
    this.getPostsIsClicked = true;
    this.service.getUsersInfo().subscribe((res) => {
      // This need to be optimized
      for (const i in res) {
        if (i !== null) {
          this.users.push(
            new User(res[i].userId, res[i].id, res[i].title, res[i].body)
          );
        }
      }
      this.isLoaded = true;
    });
  }

  clearPost() {
    this.users = [];
    this.getPostsIsClicked = false;
  }

  fetchComment(user) {
    this.dialog.open(PostComponent);
    this.service.commentClickRequest(user.userId);
  }
}
