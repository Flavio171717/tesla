/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TeslaConfigService } from './tesla-config.service';

describe('Service: TeslaConfig', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TeslaConfigService]
    });
  });

  it('should ...', inject([TeslaConfigService], (service: TeslaConfigService) => {
    expect(service).toBeTruthy();
  }));
});
