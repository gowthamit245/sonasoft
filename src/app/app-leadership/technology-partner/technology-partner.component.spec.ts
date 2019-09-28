import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyPartnerComponent } from './technology-partner.component';

describe('TechnologyPartnerComponent', () => {
  let component: TechnologyPartnerComponent;
  let fixture: ComponentFixture<TechnologyPartnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechnologyPartnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechnologyPartnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
