import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestTablePageComponent } from './test-table-page.component';

describe('TestTablePageComponent', () => {
  let component: TestTablePageComponent;
  let fixture: ComponentFixture<TestTablePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestTablePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestTablePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
