import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//paginas
import { ProjectsComponent } from './pages/projects/projects.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { SkillsComponent } from './pages/skills/skills.component';


const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'skills',
    component:SkillsComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
 {
    path:'projects',
    component:ProjectsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
