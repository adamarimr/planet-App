import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './pages/add/add.component';
import { SearchComponent } from './pages/search/search.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { PlanetsRoutingModule } from './planets-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { PlanetComponent } from './pages/planet/planet.component';



@NgModule({
  declarations: [
    AddComponent,
    SearchComponent,
    PlanetComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    PlanetsRoutingModule,
    MaterialModule
  ]
})
export class PlanetsModule { }