import { TestBed } from '@angular/core/testing';

import { NewLibDemoService } from './new-lib-demo.service';

describe('NewLibDemoService', () => {
  let service: NewLibDemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewLibDemoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
