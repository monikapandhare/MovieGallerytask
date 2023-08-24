import { Component } from '@angular/core';
import { Imovie } from './shared/models/movieInterface';
import { movie } from './shared/const/movieArray';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MovieGallerytask';
  public movieArray : Array<Imovie>=movie;
  public searchMovie! : string;
  
}
