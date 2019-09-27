import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutAboutusComponent } from './layout-aboutus.component';

describe('LayoutAboutusComponent', () => {
  let component: LayoutAboutusComponent;
  let fixture: ComponentFixture<LayoutAboutusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutAboutusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutAboutusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
