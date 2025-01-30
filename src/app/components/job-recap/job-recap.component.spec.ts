import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobRecapComponent } from './job-recap.component';

describe('JobRecapComponent', () => {
  let component: JobRecapComponent;
  let fixture: ComponentFixture<JobRecapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobRecapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JobRecapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
