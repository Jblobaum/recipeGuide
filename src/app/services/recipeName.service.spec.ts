import { TestBed } from '@angular/core/testing';
import { RecipeNameService } from './recipeName.service';

describe('RecipeService', () => {
  let service: RecipeNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RecipeNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
