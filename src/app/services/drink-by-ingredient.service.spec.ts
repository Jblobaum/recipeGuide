import { TestBed } from '@angular/core/testing';

import { DrinkByIngredientService } from './drink-by-ingredient.service';

describe('DrinkByIngredientService', () => {
  let service: DrinkByIngredientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkByIngredientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
