import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';
import { Dir } from 'fs';

@Directive({
  selector: '[appMyDirective]',
})
export class MyDirectiveDirective {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    eleRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.addClass(this.eleRef.nativeElement, 'addedClass');
  }
}

@Directive({ selector: '[appShadow]' })
export class ShadowDirective implements OnInit {
  @Input() appShadow: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadow}`;
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }
}

@Directive({
  selector: '[addEleChild]',
})
export class AddChildEleDirective {
  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit() {
    const div = this.renderer.createElement('span');
    const text = this.renderer.createText('Hello world!');

    this.renderer.appendChild(div, text);
    this.renderer.appendChild(this.el.nativeElement, div);
  }
}
