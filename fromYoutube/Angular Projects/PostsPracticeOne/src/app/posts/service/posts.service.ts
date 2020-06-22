import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  baseUrl = environment.baseURL;
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    const url = this.baseUrl + '/posts';

    return this.http.get<Post[]>(url);
  }
}
