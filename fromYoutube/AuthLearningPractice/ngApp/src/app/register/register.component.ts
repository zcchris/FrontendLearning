import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerUserDataForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  registerUser() {
    this._auth.registerUser(this.registerUserDataForm.value).subscribe(
      (res) => {
        // store the token (key, value) to the localstorate
        localStorage.setItem('token', res.token);
        this._router.navigate(['/special']);
        console.log(res);
      },
      (err) => console.log(err)
    );
    // console.log(this.registerUserDataForm.value);
  }
}
