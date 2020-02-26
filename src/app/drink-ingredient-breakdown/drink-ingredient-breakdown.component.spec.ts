import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinkIngredientBreakdownComponent } from './drink-ingredient-breakdown.component';

describe('DrinkIngredientBreakdownComponent', () => {
  let component: DrinkIngredientBreakdownComponent;
  let fixture: ComponentFixture<DrinkIngredientBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinkIngredientBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinkIngredientBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
