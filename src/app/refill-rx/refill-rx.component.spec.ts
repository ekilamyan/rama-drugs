import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefillRxComponent } from './refill-rx.component';

describe('RefillRxComponent', () => {
  let component: RefillRxComponent;
  let fixture: ComponentFixture<RefillRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefillRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RefillRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
