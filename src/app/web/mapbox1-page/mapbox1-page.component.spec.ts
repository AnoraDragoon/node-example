import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mapbox1PageComponent } from './mapbox1-page.component';

describe('Mapbox1PageComponent', () => {
  let component: Mapbox1PageComponent;
  let fixture: ComponentFixture<Mapbox1PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mapbox1PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mapbox1PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
