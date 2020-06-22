import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { AddNewUserComponent } from './components/add-new-user/add-new-user.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, HomePageComponent, AddNewUserComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'adduser',
        component: AddNewUserComponent,
      },
      {
        path: 'home',
        component: HomePageComponent,
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ]),
  ],
  providers: [UsersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
