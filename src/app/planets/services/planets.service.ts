import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Planet } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  private baseUrl: string = environment.baseUrl;


  constructor( private http: HttpClient ) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${ this.baseUrl }/planets`)
    //regresamos el observable a donde sea que se llame (list comp)
  }

  getPlanetById(id: string): Observable<Planet> {
    return this.http.get<Planet>(`${ this.baseUrl }/planets/${ id }`)
  }

  getSuggestions(term: string): Observable<Planet[]> {
    return this.http.get<Planet[]>(`${ this.baseUrl }/planets?q=${ term }&_limit=6`)
    //q=query buscando el string y tiene un limit de 6 sugerencias
  }

  addPlanet(planet: Planet): Observable<Planet> {
    return this.http.post<Planet>(`${this.baseUrl}/planets`, planet);
  }

  updatePlanet(planet: Planet): Observable<Planet> {
    return this.http.put<Planet>(`${this.baseUrl}/planets/${planet.id}`, planet);
  }

  deletePlanet(id: string): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/planets/${id}`);
  }
}
