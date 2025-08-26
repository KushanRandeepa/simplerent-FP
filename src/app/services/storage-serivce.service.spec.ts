import { TestBed } from '@angular/core/testing';

import { StorageSerivceService } from './storage-serivce.service';

describe('StorageSerivceService', () => {
  let service: StorageSerivceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StorageSerivceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
