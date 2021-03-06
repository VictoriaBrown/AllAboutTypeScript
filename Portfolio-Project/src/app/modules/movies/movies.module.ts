import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { HttpClientModule } from '@angular/common/http';
import { DisplayMovieComponent } from './components/display-movie/display-movie.component';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [DisplayMoviesComponent, DisplayMovieComponent],
  exports: [DisplayMoviesComponent]
})
export class MoviesModule { }
