import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.scss'],
})
export class ChildOneComponent implements OnInit {
  @Input()
  childValueNum: number;

  @Output()
  childEmitter = new EventEmitter();
  emmitValue: string;

  constructor() {}

  ngOnInit(): void {
    this.emmitValue = 'output value from child component';
  }

  emmiterTriggerFunc() {
    this.childEmitter.emit(this.emmitValue);
  }
}
