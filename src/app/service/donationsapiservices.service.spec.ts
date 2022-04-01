import { TestBed } from '@angular/core/testing';

import { DonationsapiservicesService } from './donationsapiservices.service';

describe('DonationsapiservicesService', () => {
  let service: DonationsapiservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsapiservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
