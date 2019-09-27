import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeadershipComponent } from './layout-leadership.component';

describe('LayoutLeadershipComponent', () => {
  let component: LayoutLeadershipComponent;
  let fixture: ComponentFixture<LayoutLeadershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLeadershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLeadershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
