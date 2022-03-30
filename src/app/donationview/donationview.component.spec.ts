import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationviewComponent } from './donationview.component';

describe('DonationviewComponent', () => {
  let component: DonationviewComponent;
  let fixture: ComponentFixture<DonationviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
