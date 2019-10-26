import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTblComponent } from './dynamic-tbl.component';

describe('DynamicTblComponent', () => {
  let component: DynamicTblComponent;
  let fixture: ComponentFixture<DynamicTblComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTblComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
