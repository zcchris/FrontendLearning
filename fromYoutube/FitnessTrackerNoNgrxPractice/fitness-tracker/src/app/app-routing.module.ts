import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AuthGuard } from './auth/auth.guard';
import { TrainingModule } from './training/training/training.module';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  // loadChildren is the key of lazy loading
  {
    path: 'training',
    // loadChildren: './training/training/training.module#TrainingModule',
    loadChildren: () => TrainingModule,
    canLoad: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
