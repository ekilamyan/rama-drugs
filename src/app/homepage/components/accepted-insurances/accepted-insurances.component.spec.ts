import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptedInsurancesComponent } from './accepted-insurances.component';

describe('AcceptedInsurancesComponent', () => {
  let component: AcceptedInsurancesComponent;
  let fixture: ComponentFixture<AcceptedInsurancesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AcceptedInsurancesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcceptedInsurancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
