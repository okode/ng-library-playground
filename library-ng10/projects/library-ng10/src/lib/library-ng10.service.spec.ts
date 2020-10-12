import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LibraryNg10Service } from './library-ng10.service';

describe('LibraryNg10Service', () => {
  let service: LibraryNg10Service;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(LibraryNg10Service);
    http = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return greeting message', () => {
    const name = 'john';
    service.greeting(name).subscribe(data => {
      expect(data.response).toEqual(`Hello, ${name}`);
    });
    const req = http.expectOne(`http://localhost:8080/greeting/${name}`);
    expect(req.request.method).toBe('GET');
    req.flush({response: `Hello, ${name}`});
  });

});
