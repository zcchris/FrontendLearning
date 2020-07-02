import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './features/components/data-binding/data-binding.component';
import { DragExampleComponent } from './features/components/drag-example/drag-example.component';
import { DragableWindowComponent } from './features/components/dragable-window/dragable-window.component';
import { HomeComponent } from './features/components/home/home.component';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'data-binding', component: DataBindingComponent },
  { path: 'drag-example', component: DragExampleComponent },
  { path: 'dragable-window', component: DragableWindowComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
