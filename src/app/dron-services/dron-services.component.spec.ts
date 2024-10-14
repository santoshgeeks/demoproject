import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DronServicesComponent } from './dron-services.component';

describe('DronServicesComponent', () => {
  let component: DronServicesComponent;
  let fixture: ComponentFixture<DronServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DronServicesComponent]
    });
    fixture = TestBed.createComponent(DronServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
