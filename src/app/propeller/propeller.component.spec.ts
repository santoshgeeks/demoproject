import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropellerComponent } from './propeller.component';

describe('PropellerComponent', () => {
  let component: PropellerComponent;
  let fixture: ComponentFixture<PropellerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropellerComponent]
    });
    fixture = TestBed.createComponent(PropellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
