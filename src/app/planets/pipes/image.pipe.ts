import { Pipe, PipeTransform } from '@angular/core';
import { Planet } from '../interfaces/planets.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(planet: Planet): string {
    return `assets/planets/${planet.id}.png`;
  }

}
