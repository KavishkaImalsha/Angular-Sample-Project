import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopTable } from './for-loop-table';

describe('ForLoopTable', () => {
  let component: ForLoopTable;
  let fixture: ComponentFixture<ForLoopTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForLoopTable],
    }).compileComponents();

    fixture = TestBed.createComponent(ForLoopTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
