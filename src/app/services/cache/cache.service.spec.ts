import { TestBed } from '@angular/core/testing';
import { CacheServerService } from './cacheServer.service';

describe('CacheService', () => {
  let service: CacheServerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CacheServerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
