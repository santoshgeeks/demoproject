import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PnpAndRtfComponent } from './pnp-and-rtf.component';

describe('PnpAndRtfComponent', () => {
  let component: PnpAndRtfComponent;
  let fixture: ComponentFixture<PnpAndRtfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PnpAndRtfComponent]
    });
    fixture = TestBed.createComponent(PnpAndRtfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
