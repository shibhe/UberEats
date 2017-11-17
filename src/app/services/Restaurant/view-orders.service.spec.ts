import { TestBed, inject } from '@angular/core/testing';

import { ViewOrdersService } from './view-orders.service';

describe('ViewOrdersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewOrdersService]
    });
  });

  it('should be created', inject([ViewOrdersService], (service: ViewOrdersService) => {
    expect(service).toBeTruthy();
  }));
});
