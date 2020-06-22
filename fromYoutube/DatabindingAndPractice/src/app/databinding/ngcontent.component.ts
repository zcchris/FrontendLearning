import { Component } from '@angular/core';

@Component({
  selector: 'ngContentTag',
  template: `
    <button class="add-btn" (click)="addOne()">
      <ng-content></ng-content>
    </button>
    <p>value: {{ value }}</p>
  `,
})
export class NgComponentLearning {
  value = 0;
  constructor() {}
  addOne() {
    this.value = this.value + 1;
  }
}
