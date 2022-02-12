import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../interfaces/planets.interface';

@Pipe({
  name: 'image',
  pure: false
})
export class ImagePipe implements PipeTransform {

  transform(planet: Planet): string {

    //que use el planeta que no existe si no existe id del platena
    // o si no contiene una imagen de planeta
    if (!planet.id || planet.alt_img === "") {
      return 'assets/no-planet.png';
    } else if (planet.alt_img) {
      return planet.alt_img;
    } else {
      return `assets/planets/${planet.id}.png`;
    }

    
  }

}
