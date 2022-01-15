import { Component, OnInit } from '@angular/core';
import { PlanetsService } from '../../services/planets.service';
import { Planet } from '../../interfaces/planets.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [`
  mat-card {
    margin-top: 20px
  }`
  ]
})
export class ListComponent implements OnInit {

  planets: Planet[] = [];

  constructor( private planetsService: PlanetsService) { }

  ngOnInit(): void {
    
    this.planetsService.getPlanets().subscribe( 
      planets => this.planets = planets);
  }

}
