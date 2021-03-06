import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SkillsModule } from './modules/skills/skills.module';
import { AppComponent } from './app.component';
import { ContactsModule } from './modules/contacts/contacts.module';
import { SkillsService } from './services/skills.service';
import { ContactServiceService } from './services/contact-service.service'
import { ContactsComponentComponent } from './modules/contacts/components/contacts/contacts-component.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { AppRoutingModule } from './/app-routing.module';
import { MoviesModule } from './modules/movies/movies.module';
import { MusicModule } from './modules/music/music.module';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    ContactFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    SkillsModule,
    ContactsModule,
    AppRoutingModule,
    MoviesModule,
    MusicModule
  ],
  providers: [SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
