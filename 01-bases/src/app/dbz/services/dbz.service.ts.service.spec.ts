import { TestBed } from '@angular/core/testing';

import { DbzServiceTsService } from './dbz.service';

describe('DbzServiceTsService', () => {
  let service: DbzServiceTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DbzServiceTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
