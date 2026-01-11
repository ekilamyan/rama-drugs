import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferRxComponent } from './transfer-rx.component';

describe('TransferRxComponent', () => {
  let component: TransferRxComponent;
  let fixture: ComponentFixture<TransferRxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransferRxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransferRxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
