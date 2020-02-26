import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientBreakdownComponent } from './ingredient-breakdown.component';

describe('IngredientBreakdownComponent', () => {
  let component: IngredientBreakdownComponent;
  let fixture: ComponentFixture<IngredientBreakdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IngredientBreakdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientBreakdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
