import { TestBed, inject } from '@angular/core/testing';

import { AddItemsService } from './add-items.service';

describe('AddItemsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddItemsService]
    });
  });

  it('should be created', inject([AddItemsService], (service: AddItemsService) => {
    expect(service).toBeTruthy();
  }));
});
