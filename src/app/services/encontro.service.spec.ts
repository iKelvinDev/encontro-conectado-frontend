import { TestBed } from '@angular/core/testing';

import { EncontroService } from './encontro.service';

describe('EncontroService', () => {
  let service: EncontroService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EncontroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
