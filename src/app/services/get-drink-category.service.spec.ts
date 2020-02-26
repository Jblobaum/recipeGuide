import { TestBed } from '@angular/core/testing';

import { GetDrinkCategoryService } from './get-drink-category.service';

describe('GetDrinkCategoryService', () => {
  let service: GetDrinkCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDrinkCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
