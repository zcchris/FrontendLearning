import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Input,
  ViewChildren,
  QueryList,
} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsServiceService } from '../posts-service.service';
import { ModalComponent } from '../modal/modal.component';
import { ElementRef } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.scss'],
})
export class DatabindingComponent implements OnInit, AfterViewInit {
  // Data binding variables:
  data1: string;
  btnDisabled: boolean;
  inputValue = 'default string';
  checkValue = '';
  inputActionValue = '';
  bindForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  formIsTouched = false;
  emailIsValid = true;
  pwdIsValid = true;
  retrievedFormValue: string;

  // Pipe variables:
  myPipeStr = 'abcde';

  // Directive variables:
  directiveParam1 = 'green';
  directiveParam2 = '15px';
  directiveParam3 = '15px';
  directiveParam4 = '20px';
  condiction = true;

  // Popup variable
  popupToggle = false;

  // Popup variable + ViewChild
  @ViewChild('modalRef')
  modalComponent: ModalComponent;

  @ViewChild('child-app') childApp: ChildComponent;
  age = 9999;

  @ViewChild('header4') headerRef: ElementRef;

  // to child component @Input()
  valueToChildComponent: number;
  // to child component @Output
  outputValue: string;

  // timerCounter
  timerCounter = 0;

  constructor(private service: PostsServiceService) {}
  ngOnInit(): void {
    this.data1 = 'data1';
    this.btnDisabled = true;
    this.valueToChildComponent = 99999;

    setInterval((t) => {
      this.timerCounter += 1;
    }, 1000);
  }

  ngAfterViewInit(): void {
    console.log(this.headerRef.nativeElement.innerHTML);
    this.headerRef.nativeElement.innerHTML =
      '"use viewChild to insert html element"';
  }

  updateInput(e: any) {
    this.inputActionValue = e.target.value;
  }

  submitInput(e: any) {
    console.log(e.target.value);
    console.log(e.keyCode);
  }

  returnString() {
    return '[Value returned function "returnString()"]';
  }

  retriveFormValue() {
    console.log(this.bindForm.value.email);
    if (
      this.bindForm.value.email === '' ||
      this.bindForm.value.email.length < 3
    ) {
      this.emailIsValid = false;
    } else {
      this.emailIsValid = true;
    }
    if (
      this.bindForm.value.password === '' ||
      this.bindForm.value.password.length < 3
    ) {
      this.pwdIsValid = false;
    } else {
      this.pwdIsValid = true;
    }
    if (this.emailIsValid && this.pwdIsValid) {
      this.retrievedFormValue = JSON.stringify(this.bindForm.value);
    } else {
      this.retrievedFormValue = 'invalid input';
    }

    this.formIsTouched = true;
    // clean the input field
    // this.bindForm.reset();
  }

  onNewValue(v) {
    console.log(v);
  }

  openPopup() {
    // this.popupToggle = !this.popupToggle;
    this.modalComponent.openPopupModal(this.popupToggle);
    // this.service.openPopupFunc();
  }

  childEmitterDisplay(e) {
    this.outputValue = e;
  }

  changeCondiction() {
    this.condiction = !this.condiction;
  }
}

@Component({
  selector: 'child-app',
  template: `<h5>age from child - {{ age }}!</h5>`,
})
export class ChildComponent {
  @Input() age: number;
}
