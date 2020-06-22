import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { PostsModule } from './posts/posts.module';
import { MyPipePipe } from './shared/pipes/my-pipe.pipe';
import { MyDirectiveDirective } from './shared/directives/my-directive.directive';

@NgModule({
  declarations: [AppComponent, MyPipePipe, MyDirectiveDirective],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    HomeModule,
    PostsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
