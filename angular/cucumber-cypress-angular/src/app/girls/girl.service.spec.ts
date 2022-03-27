import { TestBed } from '@angular/core/testing';

import { GirlService } from './girl.service';

describe('GirlService', () => {
  let service: GirlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GirlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
