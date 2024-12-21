import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesFormSkeletonComponent } from './cnes-form-skeleton.component';

describe('CnesFormSkeletonComponent', () => {
  let component: CnesFormSkeletonComponent;
  let fixture: ComponentFixture<CnesFormSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesFormSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesFormSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
