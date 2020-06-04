import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss'],
})
export class AddNewUserComponent implements OnInit {
  userForm = new FormGroup({
    id: new FormControl(''),
    name: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    addressGroup: new FormGroup({
      street: new FormControl(''),
      suite: new FormControl(''),
      city: new FormControl(''),
      zipcode: new FormControl(''),
    }),
    phone: new FormControl(''),
    website: new FormControl(''),
    companyGroup: new FormGroup({
      name: new FormControl(''),
      catchphrase: new FormControl(''),
      bs: new FormControl(''),
    }),
  });

  constructor(private router: Router, private service: UsersService) {}

  ngOnInit(): void {}

  addNewUser() {
    // the form in this example does not fit
    // let postTest = {
    //   id: 1,
    //   title: 'post2020!!test',
    //   body: 'barddd',
    //   userId: 123,
    // };
    console.log(this.userForm.value);
    // console.log(postTest);
    this.service
      .addNewUser(this.userForm.value)
      .subscribe((res) => console.log(res));
    this.router.navigate(['/home']);
  }
}
