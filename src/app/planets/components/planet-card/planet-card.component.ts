import { Component, Input, OnInit } from '@angular/core';
import { Planet } from '../../interfaces/planets.interface';

@Component({
  selector: 'app-planet-card',
  templateUrl: './planet-card.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }
`]
})
export class PlanetCardComponent implements OnInit {

  @Input() planet!: Planet;

  constructor() { }

  ngOnInit(): void {
  }

}
