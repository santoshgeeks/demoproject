import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronKitComponent } from './dron-kit.component';

describe('DronKitComponent', () => {
  let component: DronKitComponent;
  let fixture: ComponentFixture<DronKitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DronKitComponent]
    });
    fixture = TestBed.createComponent(DronKitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
