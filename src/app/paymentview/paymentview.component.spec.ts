import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaymentviewComponent } from './paymentview.component';

describe('PaymentviewComponent', () => {
  let component: PaymentviewComponent;
  let fixture: ComponentFixture<PaymentviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaymentviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaymentviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
