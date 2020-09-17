import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectsComponent } from 'src/app/pages/projects/projects.component';
import { TeamComponent } from 'src/app/pages/team/team.component';
import { EventsComponent } from 'src/app/pages/events/events.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/shared/footer/footer.component';
import { MainComponent } from './main.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SocialsComponent } from 'src/app/shared/socials/socials.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { TogglerComponent } from 'src/app/shared/toggler/toggler.component';



@NgModule({
  declarations: [
    MainComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    TeamComponent,
    EventsComponent,
    SocialsComponent,
    TogglerComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ]
})
export class MainModule { }
