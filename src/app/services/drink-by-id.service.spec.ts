import { TestBed } from '@angular/core/testing';

import { DrinkByIdService } from './drink-by-id.service';

describe('DrinkByIdService', () => {
  let service: DrinkByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
