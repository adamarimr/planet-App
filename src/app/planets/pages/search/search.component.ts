import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Planet } from '../../interfaces/planets.interface';
import { PlanetsService } from '../../services/planets.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  term: string = '';
  planets: Planet[] = [];
  selectedPlanet: Planet | undefined;

  constructor(private planetService: PlanetsService) { }

  ngOnInit(): void {
  }

  search() {
      this.planetService.getSuggestions(this.term.trim()) 
      .subscribe(planets => this.planets = planets);
  }
  
  selectedOption(event: MatAutocompleteSelectedEvent) {
   if(!event.option.value) {
      this.selectedPlanet = undefined;
      return;
    }
      const planet: Planet = event.option.value;
      this.term = planet.planet;
      this.planetService.getPlanetById(planet.id).subscribe(planet => this.selectedPlanet = planet);
  }

}
