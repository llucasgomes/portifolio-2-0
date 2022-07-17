import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsP1Component } from './projects-p1.component';

describe('ProjectsP1Component', () => {
  let component: ProjectsP1Component;
  let fixture: ComponentFixture<ProjectsP1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectsP1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectsP1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
