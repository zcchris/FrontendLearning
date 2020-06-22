import { Directive, ElementRef, OnInit, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appMyDirective1]',
})
export class MyDirectiveDirective {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {
    eleRef.nativeElement.style.backgroundColor = 'yellow';
    this.renderer.addClass(this.eleRef.nativeElement, 'addedClass');
  }
}

@Directive({
  selector: '[appMyDirective2]',
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

//👇selector below allows to have any of these:
//👇 "'[appShadowColor]', '[appShadowX]', '[appShadowY]', '[appShadowBlur]'"
@Directive({ selector: '[appShadowY]' })
export class ShadowDirective implements OnInit {
  @Input() appShadowColor: string;
  @Input() appShadowX: string;
  @Input() appShadowY: string;
  @Input() appShadowBlur: string;
  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const shadowStr = `${this.appShadowX} ${this.appShadowY} ${this.appShadowBlur} ${this.appShadowColor}`;
    console.log('shadowStr--->', shadowStr);
    this.renderer.setStyle(this.elem.nativeElement, 'box-shadow', shadowStr);
  }
}

@Directive({ selector: '[myCustomIf]' })
export class CondictionDirective {
  constructor(private ele: ElementRef) {}

  @Input()
  set myCustomIf(condition: boolean) {
    // console.log(this.ele);
    if (condition) {
      this.ele.nativeElement.nextElementSibling.style.backgroundColor =
        'yellow';
    } else {
      console.log(this.ele.nativeElement.parentNode);
      this.ele.nativeElement.nextElementSibling.style.backgroundColor = 'red';
    }
  }
}
