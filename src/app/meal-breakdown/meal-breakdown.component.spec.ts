import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealBreakdownComponent } from './meal-breakdown.component';

describe('MealBreakdownComponent', () => {
  let component: MealBreakdownComponent;
  let fixture: ComponentFixture<MealBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
