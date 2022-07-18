import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsComplementsComponent } from './skills-complements.component';

describe('SkillsComplementsComponent', () => {
  let component: SkillsComplementsComponent;
  let fixture: ComponentFixture<SkillsComplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillsComplementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsComplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
