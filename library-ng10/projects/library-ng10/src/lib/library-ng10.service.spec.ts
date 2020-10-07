import { TestBed } from '@angular/core/testing';

import { LibraryNg10Service } from './library-ng10.service';

describe('LibraryNg10Service', () => {
  let service: LibraryNg10Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryNg10Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
