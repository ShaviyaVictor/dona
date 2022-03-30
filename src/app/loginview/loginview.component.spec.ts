import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginviewComponent } from './loginview.component';

describe('LoginviewComponent', () => {
  let component: LoginviewComponent;
  let fixture: ComponentFixture<LoginviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
