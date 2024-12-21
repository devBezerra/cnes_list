import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesLocationComponent } from './cnes-location.component';

describe('CnesLocationComponent', () => {
  let component: CnesLocationComponent;
  let fixture: ComponentFixture<CnesLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesLocationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
