import { TestBed, inject } from '@angular/core/testing';

import { TransportistasService } from './transportistas.service';

describe('TransportistasService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TransportistasService]
    });
  });

  it('should be created', inject([TransportistasService], (service: TransportistasService) => {
    expect(service).toBeTruthy();
  }));
});
