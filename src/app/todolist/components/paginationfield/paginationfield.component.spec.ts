import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationfieldComponent } from './paginationfield.component';

describe('PaginationfieldComponent', () => {
  let component: PaginationfieldComponent;
  let fixture: ComponentFixture<PaginationfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginationfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
