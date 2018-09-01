import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';
import { DisplayMoviesComponent } from './modules/movies/display-movies/display-movies.component';
import { DisplayMusicComponent } from './modules/music/display-music/display-music.component';

const routes: Routes = [
  {
    path: 'contact',
    component: ContactFormComponent
  },
  {
    path: 'skills',
    component: SkillsComponent
  },
  {
    path: 'greeting',
    component: GreetingComponent
  },
  {
    path: 'movies',
    component: DisplayMoviesComponent
  },
  {
    path: 'music',
    component: DisplayMusicComponent
  },
  {
    path: '',
    redirectTo: '/greeting',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
