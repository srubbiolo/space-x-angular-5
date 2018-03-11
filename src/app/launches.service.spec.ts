import { TestBed, inject } from '@angular/core/testing';

import { LaunchesService } from './launches.service';

describe('LaunchesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LaunchesService]
    });
  });

  it('should be created', inject([LaunchesService], (service: LaunchesService) => {
    expect(service).toBeTruthy();
  }));
  it('should set a object and be able to get it', inject([LaunchesService], (service: LaunchesService) => {
    service.setCurrentLaunch({launch: 'caniveral'});
    var testObject = service.getCurrentLaunch();
    expect(testObject).toEqual({launch: 'caniveral'});
  }));
});
