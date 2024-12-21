import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesDetailsComponent } from './cnes-details.component';

describe('CnesDetailsComponent', () => {
  let component: CnesDetailsComponent;
  let fixture: ComponentFixture<CnesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
