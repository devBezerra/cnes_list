import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CnesTableComponent } from './cnes-table.component';

describe('CnesTableComponent', () => {
  let component: CnesTableComponent;
  let fixture: ComponentFixture<CnesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CnesTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CnesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
