import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { SkillsComponent } from './modules/skills/components/skills/skills.component';

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
