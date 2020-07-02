import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  resolveForwardRef,
} from '@angular/core';

import { Hero } from '../../../shared/interfaces/Hero.class';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss'],
})
export class DataBindingComponent {
  propertyValue = 'wtf';
  propertyStyleBGColor = 'darkorchid';
  title2 = 'This is title2';
  interpolationValue1 = 'interpolationValue1';
  interpolationValue2 = 'interpolationValue2';
  twoWayBindingValue = '';
  refInputVarValue = '';
  refInputVarThroughViewChild = '';
  @ViewChild('refInputVar') viewChildInputRef: ElementRef;
  hero: Hero;
  constructor() {}

  showRefInputvar(refInputVar) {
    this.refInputVarValue = refInputVar.value;
    this.refInputVarThroughViewChild = this.viewChildInputRef.nativeElement.value;
    refInputVar.value = '';
  }

  createObj() {
    this.hero = new Hero('Zhicheng Chen', 200);
  }
}
