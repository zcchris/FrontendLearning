import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { concat, from, fromEvent } from 'rxjs';
import {
  concatAll,
  filter,
  map,
  takeUntil,
  withLatestFrom,
} from 'rxjs/operators';

@Component({
  selector: 'app-dragable-window',
  templateUrl: './dragable-window.component.html',
  styleUrls: ['./dragable-window.component.scss'],
})
export class DragableWindowComponent implements AfterViewInit {
  @ViewChild('anchor', { read: ElementRef }) anchor: ElementRef;
  @ViewChild('video', { read: ElementRef }) video: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    const scroll = fromEvent<any>(document, 'scroll');

    scroll
      .pipe(
        map((e) => {
          return this.anchor.nativeElement.getBoundingClientRect().bottom < 40;
        })
      )
      .subscribe((b) => {
        // console.log(b);
        if (b) {
          this.video.nativeElement.classList.add('video-fix');
        } else {
          this.video.nativeElement.classList.remove('video-fix');
        }
      });

    const mouseDown = fromEvent<any>(this.video.nativeElement, 'mousedown');
    const mouseUp = fromEvent<any>(document, 'mouseup');
    const mouseMove = fromEvent<any>(document, 'mousemove');

    const mouseAction = mouseDown.pipe(
      filter((e) => this.video.nativeElement.classList.contains('video-fix')),
      map((e) => mouseMove.pipe(takeUntil(mouseUp))),
      concatAll(),
      withLatestFrom(mouseDown, (move, down) => {
        return {
          x: validValue(
            move.clientX - down.offsetX,
            window.innerWidth - 320,
            0
          ),
          y: validValue(
            move.clientY - down.offsetY,
            window.innerHeight - 250,
            0
          ),
        };
      })
    );

    mouseAction.subscribe((pos) => {
      console.log(pos);
      this.video.nativeElement.style.left = pos.x + 'px';
      this.video.nativeElement.style.top = pos.y + 'px';
    });
  }
}

const validValue = (value, max, min) => {
  return Math.min(Math.max(value, min), max);
};
