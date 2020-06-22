import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent],
  imports: [CommonModule, RouterModule],
  exports: [HeaderComponent, PageNotFoundComponent],
})
export class CoreModule {}
