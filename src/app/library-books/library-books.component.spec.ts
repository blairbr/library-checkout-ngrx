import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryBooksComponent } from './library-books.component';

describe('LibraryBooksComponent', () => {
  let component: LibraryBooksComponent;
  let fixture: ComponentFixture<LibraryBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryBooksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
