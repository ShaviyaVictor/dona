import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterviewComponent } from './registerview.component';

describe('RegisterviewComponent', () => {
  let component: RegisterviewComponent;
  let fixture: ComponentFixture<RegisterviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
