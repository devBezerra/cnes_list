import { TestBed } from '@angular/core/testing';

import { CnesService } from './cnes.service';

describe('CnesService', () => {
  let service: CnesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CnesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
