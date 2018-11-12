import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandItemComponent } from './demand-item.component';

describe('DemandItemComponent', () => {
  let component: DemandItemComponent;
  let fixture: ComponentFixture<DemandItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
