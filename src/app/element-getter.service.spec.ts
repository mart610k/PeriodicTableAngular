import { TestBed } from '@angular/core/testing';

import { ElementGetterService } from './element-getter.service';

describe('ElementGetterService', () => {
  let service: ElementGetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementGetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
