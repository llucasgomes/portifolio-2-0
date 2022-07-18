import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectInitialComponent } from './project-initial.component';

describe('ProjectInitialComponent', () => {
  let component: ProjectInitialComponent;
  let fixture: ComponentFixture<ProjectInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
