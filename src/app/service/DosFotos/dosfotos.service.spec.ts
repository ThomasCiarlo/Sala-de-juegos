import { TestBed } from '@angular/core/testing';

import { DosfotosService } from './dosfotos.service';

describe('DosfotosService', () => {
  let service: DosfotosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DosfotosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
