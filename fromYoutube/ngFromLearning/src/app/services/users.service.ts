import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  path = 'https://jsonplaceholder.typicode.com/users/11';
  httpOptions: object;
  constructor(private http: HttpClient) {
    this.httpOptions = {
      header: new HttpHeaders({
        'Content-type': 'application/json',
      }),
    };
  }

  addNewUser(obj: object) {
    console.log(obj);
    return this.http.put(this.path, obj, this.httpOptions);
  }
}
