import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SortfieldComponent } from './sortfield.component';

describe('SortfieldComponent', () => {
  let component: SortfieldComponent;
  let fixture: ComponentFixture<SortfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SortfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SortfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
