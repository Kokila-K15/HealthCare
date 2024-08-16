import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctionPrescriptionComponent } from './doction-prescription.component';

describe('DoctionPrescriptionComponent', () => {
  let component: DoctionPrescriptionComponent;
  let fixture: ComponentFixture<DoctionPrescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctionPrescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctionPrescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
