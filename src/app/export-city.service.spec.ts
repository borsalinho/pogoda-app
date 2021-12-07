import { TestBed } from '@angular/core/testing';

import { ExportCityService } from './export-city.service';

describe('ExportCityService', () => {
  let service: ExportCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExportCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
