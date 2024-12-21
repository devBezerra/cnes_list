import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesListSkeletonComponent } from './cnes-list-skeleton.component';

describe('CnesListSkeletonComponent', () => {
  let component: CnesListSkeletonComponent;
  let fixture: ComponentFixture<CnesListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesListSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
