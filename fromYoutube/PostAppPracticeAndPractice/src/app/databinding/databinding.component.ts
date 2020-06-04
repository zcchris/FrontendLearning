import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PostsServiceService } from '../posts-service.service';
import { ModalComponent } from '../modal/modal.component';

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
  directiveParam = 'green';
  // Popup variable
  popupToggle = false;

  @ViewChild('modalRef')
  modalComponent: ModalComponent;

  constructor(private service: PostsServiceService) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.data1 = 'data1';
    this.btnDisabled = true;
  }

  submitInput(e: any) {
    this.inputValue = e.target.value;
  }

  returnString() {
    return 'return from function "returnString()"';
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
    this.modalComponent.test(this.popupToggle);
    // this.service.openPopupFunc();
  }
}
