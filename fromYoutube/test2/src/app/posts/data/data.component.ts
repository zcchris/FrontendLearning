import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../../core/interface';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  @Input() posts: Post[];
  constructor() {}

  ngOnInit(): void {}
}
