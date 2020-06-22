import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { PostsComponent } from './posts/components/posts/posts.component';
import { HomeComponent } from './home/components/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'one', component: PostsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
