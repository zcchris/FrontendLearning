import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WelPopupComponent } from './wel-popup.component';

describe('WelPopupComponent', () => {
  let component: WelPopupComponent;
  let fixture: ComponentFixture<WelPopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WelPopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
