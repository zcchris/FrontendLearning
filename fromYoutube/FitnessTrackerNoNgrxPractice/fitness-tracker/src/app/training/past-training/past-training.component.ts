import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-training',
  templateUrl: './past-training.component.html',
  styleUrls: ['./past-training.component.css'],
})
export class PastTrainingComponent implements OnInit, AfterViewInit, OnDestroy {
  // MatTableDataSource assume to get an array of data
  dataSource = new MatTableDataSource<Exercise>();
  displayColumns = ['date', 'name', 'duration', 'calories', 'state'];

  private exChangedSubscription: Subscription;

  @ViewChild(MatSort) sort: MatSort;
  // <mat-paginator>
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private trainingService: TrainingService) {}

  ngOnInit(): void {
    this.exChangedSubscription = this.trainingService.finishedExercisesChanged.subscribe(
      (exercises: Exercise[]) => {
        this.dataSource.data = exercises;
      }
    );
    // it should be subscribed to
    this.trainingService.fetchCompletedOrCancelleExercises();
  }
  // executed once the view is done initializing
  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    // just connect the datasource and paginator,
    // the ng-mat will do the rest behind the scene: make it functional
    this.dataSource.paginator = this.paginator;
  }

  doFilter(filterStr: string) {
    // trim white space and make all lowercase
    this.dataSource.filter = filterStr.trim().toLowerCase();
  }

  ngOnDestroy(): void {
    if (this.exChangedSubscription) {
      this.exChangedSubscription.unsubscribe();
    }
  }
}
