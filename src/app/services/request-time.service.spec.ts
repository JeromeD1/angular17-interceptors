import { TestBed } from '@angular/core/testing';

import { RequestTimeService } from './request-time.service';

describe('RequestTimeService', () => {
  let service: RequestTimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestTimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
