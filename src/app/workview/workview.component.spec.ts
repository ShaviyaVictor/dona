import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkviewComponent } from './workview.component';

describe('WorkviewComponent', () => {
  let component: WorkviewComponent;
  let fixture: ComponentFixture<WorkviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
