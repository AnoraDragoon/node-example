import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimengTablePageComponent } from './primeng-table-page.component';

describe('PrimengTablePageComponent', () => {
    let component: PrimengTablePageComponent;
    let fixture: ComponentFixture<PrimengTablePageComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [PrimengTablePageComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(PrimengTablePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
