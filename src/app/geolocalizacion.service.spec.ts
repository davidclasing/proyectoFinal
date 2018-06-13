import { TestBed, inject } from '@angular/core/testing';

import { GeolocalizacionService } from './geolocalizacion.service';

describe('GeolocalizacionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeolocalizacionService]
    });
  });

  it('should be created', inject([GeolocalizacionService], (service: GeolocalizacionService) => {
    expect(service).toBeTruthy();
  }));
});
