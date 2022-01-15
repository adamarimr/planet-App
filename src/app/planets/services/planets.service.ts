import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planet } from '../interfaces/planets.interface';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {

  constructor( private http: HttpClient ) { }

  getPlanets(): Observable<Planet[]> {
    return this.http.get<Planet[]>('http://localhost:3000/planets')
    //regresamos el observable a donde sea que se llame (list comp)
  }
}
