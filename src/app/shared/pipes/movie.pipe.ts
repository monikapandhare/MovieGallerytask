import { Pipe, PipeTransform } from '@angular/core';
import { Imovie } from '../models/movieInterface';

@Pipe({
  name: 'movie'
})
export class MoviePipe implements PipeTransform {

  transform(value: Imovie[],movistring:string): Imovie[] {
     if(!value){
      return []
     }
     if(!movistring){
      return value
     }
    let movieArray = value.filter(movie =>{
      return movie.title.toLowerCase().includes(movistring)
    })
    return movieArray
  }

}
