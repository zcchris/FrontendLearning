import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from '../../shared/ui.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromRoot from '../../app.reducer';
import { state } from '@angular/animations';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  private loadingSub: Subscription;

  constructor(
    private authService: AuthService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    // the $ can be controlled by ngrx
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);

    // this.loadingSub = this.uiService.loadingStateChanged.subscribe(
    //   (isLoading) => {
    //     this.isLoading = isLoading;
    //   }
    // );
  }

  onSubmit(form: NgForm) {
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
