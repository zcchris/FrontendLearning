import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { decrement, increment, reset } from '../../myActions.actions';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-my-component1',
  templateUrl: './my-component1.component.html',
  styleUrls: ['./my-component1.component.scss'],
})
export class MyComponent1Component implements OnInit {
  count: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.count = this.store.pipe(select('count'));
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {}
}
