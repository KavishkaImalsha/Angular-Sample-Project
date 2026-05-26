import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicClass } from './dynamic-class';

describe('DynamicClass', () => {
  let component: DynamicClass;
  let fixture: ComponentFixture<DynamicClass>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DynamicClass],
    }).compileComponents();

    fixture = TestBed.createComponent(DynamicClass);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
