import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandNavComponent } from './demand-nav.component';

describe('DemandNavComponent', () => {
  let component: DemandNavComponent;
  let fixture: ComponentFixture<DemandNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
