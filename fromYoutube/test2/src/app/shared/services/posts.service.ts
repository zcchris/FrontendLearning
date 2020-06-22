import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Post } from '../../core/interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  basicUrl = environment.basicUrl;
  constructor(private http: HttpClient) {}

  getPost(): Observable<Post[]> {
    const url = this.basicUrl + '/posts';
    return this.http.get<Post[]>(url);
  }
}
