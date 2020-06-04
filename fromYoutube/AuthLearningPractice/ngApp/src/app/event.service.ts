import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  // property points to the backend apis
  private _eventsUrl = 'http://localhost:3000/api/events';
  private _specialEventsUrl = 'http://localhost:3000/api/special';

  constructor(private http: HttpClient) {}

  // methods below both return observable object
  getEvents() {
    return this.http.get<any>(this._eventsUrl);
  }
  getSpecialEvents() {
    return this.http.get<any>(this._specialEventsUrl);
  }
}
