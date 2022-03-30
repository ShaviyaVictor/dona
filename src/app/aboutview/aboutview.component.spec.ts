import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutviewComponent } from './aboutview.component';

describe('AboutviewComponent', () => {
  let component: AboutviewComponent;
  let fixture: ComponentFixture<AboutviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
