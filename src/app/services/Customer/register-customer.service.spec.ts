import { TestBed, inject } from '@angular/core/testing';

import { RegisterCustomerService } from './register-customer.service';

describe('RegisterCustomerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterCustomerService]
    });
  });

  it('should be created', inject([RegisterCustomerService], (service: RegisterCustomerService) => {
    expect(service).toBeTruthy();
  }));
});
