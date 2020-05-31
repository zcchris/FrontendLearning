import { NgModule } from '@angular/core';
import { StopTrainingComponent } from '../current-training/stop-training.component';
import { TrainingComponent } from '../training.component';
import { CurrentTrainingComponent } from '../current-training/current-training.component';
import { NewTrainingComponent } from '../new-training/new-training.component';
import { PastTrainingComponent } from '../past-training/past-training.component';
import { SharedModule } from '../../shared/shared/shared.module';
import { TrainingRoutingModule } from '../training-routing.module';

@NgModule({
  declarations: [
    StopTrainingComponent,
    TrainingComponent,
    CurrentTrainingComponent,
    NewTrainingComponent,
    PastTrainingComponent,
  ],
  imports: [SharedModule, TrainingRoutingModule],
  entryComponents: [StopTrainingComponent],
})
export class TrainingModule {}
