import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterForm1Component } from './filter-form1.component';

describe('FilterForm1Component', () => {
  let component: FilterForm1Component;
  let fixture: ComponentFixture<FilterForm1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterForm1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterForm1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
