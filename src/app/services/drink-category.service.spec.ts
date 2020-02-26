import { TestBed } from '@angular/core/testing';

import { DrinkCategoryService } from './drink-category.service';

describe('DrinkCategoryService', () => {
  let service: DrinkCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
