import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesRecentComponent } from './courses-recent.component';

describe('CoursesRecentComponent', () => {
  let component: CoursesRecentComponent;
  let fixture: ComponentFixture<CoursesRecentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesRecentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesRecentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
