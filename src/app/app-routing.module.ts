import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './layouts/main/main.component';
import { EventsComponent } from './pages/events/events.component';
import { HomeComponent } from './pages/home/home.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path:'home',
        component: HomeComponent
      },
      {
        path:'events',
        component: EventsComponent
      },
      {
        path:'projects',
        component: ProjectsComponent
      },
      {
        path:"team",
        component: TeamComponent,
      },
      {
				path: '',
				redirectTo:'home',
				pathMatch:'full'
			}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
