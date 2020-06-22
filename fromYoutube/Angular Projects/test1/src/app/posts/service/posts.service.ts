import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from '../Interfaces/post.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  basicUrl = environment.url;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = this.basicUrl + '/posts';
    return this.http.get<Post[]>(url);
  }

  getPostsWithId(id: number): Observable<Post> {
    const url = this.basicUrl + '/posts/' + id;

    return this.http.get<Post>(url);
  }
}
