import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ProjectInitialComponent } from './components/template/project-initial/project-initial.component';
import { ProjectComplementComponent } from './components/template/project-complement/project-complement.component';
import { SkillsInitialComponent } from './components/template/skills-initial/skills-initial.component';


//paginas
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { SkillsComplementsComponent } from './components/template/skills-complements/skills-complements.component';
import { SkillsComponent } from './pages/skills/skills.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ContactComponent,
    AboutComponent,
    ProjectInitialComponent,
    ProjectComplementComponent,
    SkillsInitialComponent,
    SkillsComplementsComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
