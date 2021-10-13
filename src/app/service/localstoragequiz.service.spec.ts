import { TestBed } from '@angular/core/testing';

import { LocalstoragequizService } from './localstoragequiz.service';

describe('LocalstoragequizService', () => {
  let service: LocalstoragequizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalstoragequizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
