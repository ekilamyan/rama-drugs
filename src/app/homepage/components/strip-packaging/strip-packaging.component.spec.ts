import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StripPackagingComponent } from './strip-packaging.component';

describe('StripPackagingComponent', () => {
  let component: StripPackagingComponent;
  let fixture: ComponentFixture<StripPackagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StripPackagingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StripPackagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
