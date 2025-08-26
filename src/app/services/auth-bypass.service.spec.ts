import { TestBed } from '@angular/core/testing';

import { AuthBypassService } from './auth-bypass.service';

describe('AuthBypassService', () => {
  let service: AuthBypassService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthBypassService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
