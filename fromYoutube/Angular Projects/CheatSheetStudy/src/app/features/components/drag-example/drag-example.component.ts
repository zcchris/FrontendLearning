import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable, Subscription, fromEvent } from 'rxjs';
import { concatAll, map, take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-drag-example',
  templateUrl: './drag-example.component.html',
  styleUrls: ['./drag-example.component.scss'],
})
export class DragExampleComponent implements AfterViewInit {
  currentStyle = {
    left: '0px',
    top: '0px',
  };

  @ViewChild('drag', { read: ElementRef }) dragDOM: ElementRef;
  body = document.body;

  constructor() {}

  ngAfterViewInit(): void {
    const mouseDown = fromEvent<any>(this.dragDOM.nativeElement, 'mousedown');
    const mouseUp = fromEvent<any>(this.body, 'mouseup');
    const mouseMove = fromEvent<any>(this.body, 'mousemove');

    // mouseDown
    //   .pipe(map((event) => mouseMove.pipe(takeUntil(mouseUp))))
    //   .subscribe((x) => console.log(x));

    // mouseDown.pipe(takeUntil(mouseUp)).subscribe((x) => console.log(x));

    // mouseMove.pipe(takeUntil(mouseDown)).subscribe((x) => console.log(x));

    const sourse = mouseDown.pipe(
      map((event) => mouseMove.pipe(takeUntil(mouseUp))),
      concatAll(),
      map((m) => {
        return {
          x: m.clientX,
          y: m.clientY,
        };
      })
    );

    sourse.subscribe((pos) => {
      this.currentStyle.left = pos.x + 'px';
      this.currentStyle.top = pos.y - 40 + 'px'; // because of the height of the navbar is 40
    });
  }
}
