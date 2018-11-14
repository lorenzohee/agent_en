import { TestBed, inject } from '@angular/core/testing';

import { DemandDetailResolverService } from './demand-detail-resolver.service';

describe('DemandDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DemandDetailResolverService]
    });
  });

  it('should be created', inject([DemandDetailResolverService], (service: DemandDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
