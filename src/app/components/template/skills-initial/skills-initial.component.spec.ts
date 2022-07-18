import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsInitialComponent } from './skills-initial.component';

describe('SkillsInitialComponent', () => {
  let component: SkillsInitialComponent;
  let fixture: ComponentFixture<SkillsInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
