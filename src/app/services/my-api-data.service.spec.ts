import { TestBed } from '@angular/core/testing';

import { MyApiDataService } from './my-api-data.service';

describe('MyApiDataService', () => {
  let service: MyApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
