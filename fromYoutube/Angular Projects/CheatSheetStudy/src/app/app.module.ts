import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { FeaturesModule } from './features/features.module';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent, NavbarComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FeaturesModule,
    RouterModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
