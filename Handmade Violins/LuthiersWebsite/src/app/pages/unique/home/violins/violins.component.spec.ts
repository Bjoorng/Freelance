import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolinsComponent } from './violins.component';

describe('ViolinsComponent', () => {
  let component: ViolinsComponent;
  let fixture: ComponentFixture<ViolinsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViolinsComponent]
    });
    fixture = TestBed.createComponent(ViolinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
