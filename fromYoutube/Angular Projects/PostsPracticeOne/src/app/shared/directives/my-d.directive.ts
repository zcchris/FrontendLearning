import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMyD]',
})
export class MyDDirective {
  constructor(private ele: ElementRef, private render: Renderer2) {
    ele.nativeElement.style.color = 'blue';
    ele.nativeElement.innerHTML = '我靠';
  }
}
