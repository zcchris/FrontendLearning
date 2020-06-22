import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PostsComponent } from './posts/posts.component';
import { PostComponent } from './post/post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { WelPopupComponent } from './wel-popup/wel-popup.component';
import { HttpClientModule } from '@angular/common/http';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {
  DatabindingComponent,
  ChildComponent,
} from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MyPipePipe, PipeWithParams } from './pipe/my-pipe.pipe';
import { NgComponentLearning } from './databinding/ngcontent.component';
import {
  AddChildEleDirective,
  CondictionDirective,
} from './directive/my-directive.directive';
import { ModalComponent } from './modal/modal.component';
import {
  MyDirectiveDirective,
  ShadowDirective,
} from './directive/my-directive.directive';
import { ChildOneComponent } from './databinding/child-one/child-one.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    PostsComponent,
    PostComponent,
    WelPopupComponent,
    DatabindingComponent,
    MyPipePipe,
    PipeWithParams,
    MyDirectiveDirective,
    ShadowDirective,
    CondictionDirective,
    NgComponentLearning,
    AddChildEleDirective,
    ModalComponent,
    ChildComponent,
    ChildOneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
