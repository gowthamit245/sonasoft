import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCapabilitiesComponent } from './layout-capabilities.component';

describe('LayoutCapabilitiesComponent', () => {
  let component: LayoutCapabilitiesComponent;
  let fixture: ComponentFixture<LayoutCapabilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCapabilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCapabilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
