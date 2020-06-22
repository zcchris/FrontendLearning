import { Directive, Input, OnInit, Renderer2, ElementRef } from '@angular/core';

@Directive({
  selector: '[appMy]',
})
export class MyDirective implements OnInit {
  // @Input() appMy: number;
  constructor(private render: Renderer2, private ele: ElementRef) {}
  ngOnInit() {
    this.ele.nativeElement.style.backgroundColor = 'gray';
  }
}
