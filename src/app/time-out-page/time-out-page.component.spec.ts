import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOutPageComponent } from './time-out-page.component';

describe('TimeOutPageComponent', () => {
  let component: TimeOutPageComponent;
  let fixture: ComponentFixture<TimeOutPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimeOutPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOutPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
