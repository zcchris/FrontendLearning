import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragableWindowComponent } from './dragable-window.component';

describe('DragableWindowComponent', () => {
  let component: DragableWindowComponent;
  let fixture: ComponentFixture<DragableWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragableWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragableWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
