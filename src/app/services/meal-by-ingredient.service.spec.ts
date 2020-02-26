import { TestBed } from '@angular/core/testing';

import { MealByIngredientService } from './meal-by-ingredient.service';

describe('MealByIngredientService', () => {
  let service: MealByIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MealByIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
