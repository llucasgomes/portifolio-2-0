import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/template/header/header.component';
import { BannerComponent } from './components/template/banner/banner.component';
import { SkillsComponent } from './components/template/skills/skills.component';
import { ProjectsP1Component } from './components/template/projects-p1/projects-p1.component';
import { FooterComponent } from './components/template/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SkillsComponent,
    ProjectsP1Component,
    FooterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
