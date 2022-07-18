import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectComplementComponent } from './project-complement.component';

describe('ProjectComplementComponent', () => {
  let component: ProjectComplementComponent;
  let fixture: ComponentFixture<ProjectComplementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectComplementComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectComplementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
