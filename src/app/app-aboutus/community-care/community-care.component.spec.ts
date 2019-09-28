import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityCareComponent } from './community-care.component';

describe('CommunityCareComponent', () => {
  let component: CommunityCareComponent;
  let fixture: ComponentFixture<CommunityCareComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunityCareComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityCareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
