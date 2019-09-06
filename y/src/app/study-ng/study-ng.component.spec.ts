import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyNGComponent } from './study-ng.component';

describe('StudyNGComponent', () => {
  let component: StudyNGComponent;
  let fixture: ComponentFixture<StudyNGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudyNGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudyNGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
