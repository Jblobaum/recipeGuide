import { TestBed } from '@angular/core/testing';

import { DrinkNameService } from './drink-name.service';

describe('DrinkNameService', () => {
  let service: DrinkNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DrinkNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
