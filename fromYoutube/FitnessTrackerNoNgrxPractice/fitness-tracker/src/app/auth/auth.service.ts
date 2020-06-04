import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromApp from '../app.reducer';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  initAuthListner() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.authChange.next(false);
        this.isAuthenticated = false;
        this.router.navigate(['/login']);
        this.trainingService.cancelSubscriptions();
      }
    });
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
        this.uiService.loadingStateChanged.next(false);
        // console.log(res);
      })
      .catch((err) => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(err.message, null, 3000);
        // the same as below
        // this.snackBar.open(err.message, null, {
        //   duration: 3500,
        // });
      });
  }

  login(authData: AuthData) {
    this.uiService.loadingStateChanged.next(true);
    this.afAuth.auth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((res) => {
        this.uiService.loadingStateChanged.next(false);
      })
      .catch((err) => {
        this.uiService.loadingStateChanged.next(false);
        this.uiService.showSnackbar(err.message, null, 3000);
        // the same as below
        // this.snackBar.open(err.message, null, {
        //   duration: 3500,
        // });
      });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
