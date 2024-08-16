import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PViewDoctorComponent } from './p-view-doctor.component';

describe('PViewDoctorComponent', () => {
  let component: PViewDoctorComponent;
  let fixture: ComponentFixture<PViewDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PViewDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PViewDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
