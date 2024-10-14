import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ESCComponent } from './esc.component';

describe('ESCComponent', () => {
  let component: ESCComponent;
  let fixture: ComponentFixture<ESCComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ESCComponent]
    });
    fixture = TestBed.createComponent(ESCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
