import { TestBed } from '@angular/core/testing';

import { OurWorkService } from './our-work.service';

describe('OurWorkService', () => {
  let service: OurWorkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurWorkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
