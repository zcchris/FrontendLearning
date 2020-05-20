import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

@Component({
  selector: 'app-my-display',
  templateUrl: './my-display.component.html',
  styleUrls: ['./my-display.component.css'],
})
export class MyDisplayComponent {
  word$: Observable<string>;
  constructor(private store: Store<{ word1: string }>) {
    this.word$ = store.pipe(select('word1'));
  }
}
