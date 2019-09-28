import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IBMPartnershipComponent } from './ibm-partnership.component';

describe('IBMPartnershipComponent', () => {
  let component: IBMPartnershipComponent;
  let fixture: ComponentFixture<IBMPartnershipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IBMPartnershipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IBMPartnershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
