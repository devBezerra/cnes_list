import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesFormComponent } from './cnes-form.component';

describe('CnesFormComponent', () => {
  let component: CnesFormComponent;
  let fixture: ComponentFixture<CnesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
