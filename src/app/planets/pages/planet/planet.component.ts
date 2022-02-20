import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from '../../interfaces/planets.interface';
import {switchMap} from 'rxjs/operators'
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styles: [`img {
      width: 100%;
      border-radius: 5px;
    }`
  ]
})
export class PlanetComponent implements OnInit {

  planet!: Planet;

  constructor(private activatedRoute: ActivatedRoute,
    private planetService: PlanetsService,
    private router: Router) { }

  ngOnInit(): void {
    this.activatedRoute.params.pipe(
      switchMap(({ id }) => this.planetService.getPlanetById(id))).subscribe
      (planet => this.planet = planet)
  }

  goBack() {
    this.router.navigate(['/planets/list']);
  }

}
