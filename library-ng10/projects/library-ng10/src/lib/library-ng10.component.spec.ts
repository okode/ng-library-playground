import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryNg10Component } from './library-ng10.component';

describe('LibraryNg10Component', () => {
  let component: LibraryNg10Component;
  let fixture: ComponentFixture<LibraryNg10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryNg10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibraryNg10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
