import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortGridComponent } from './sort-grid.component';

describe('SortGridComponent', () => {
  let component: SortGridComponent;
  let fixture: ComponentFixture<SortGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SortGridComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SortGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
