import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UsersPayload } from './model/user';
import { Subject, Observable } from 'rxjs';

const POSTS = 'https://jsonplaceholder.typicode.com/posts';
const POSTS_ = 'https://jsonplaceholder.typicode.com/posts/';
const _COMMENTS = '/comments';

@Injectable({
  providedIn: 'root',
})
export class PostsServiceService {
  userComments = new Observable<any>();
  popToggle = false;

  constructor(private http: HttpClient) {}

  getUsersInfo() {
    return this.http.get(POSTS);
  }

  getUserComments() {
    return this.userComments;
  }

  commentClickRequest(userId) {
    this.userComments = this.http.get(POSTS_ + userId + _COMMENTS);
  }

  openPopupFunc(): boolean {
    return (this.popToggle = !this.popToggle);
    // console.log('open in service');
  }
}
