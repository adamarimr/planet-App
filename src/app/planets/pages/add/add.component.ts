import { Component, OnInit } from '@angular/core';
import { Planet, Sizes } from '../../interfaces/planets.interface';
import { PlanetsService } from '../../services/planets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog} from '@angular/material/dialog';
import { ConfirmComponent } from '../../components/confirm/confirm.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [`
  img {
    width: 80%;
    border-radius: 5px;
  }`
  ]
})
export class AddComponent implements OnInit {

  sizes =[
    {
      id: 'big',
      desc: 'Big'
    },
    {
      id: 'small',
      desc: 'Small'
    },
    {
      id: 'medium',
      desc: 'Medium'
    }
  ];

  planet: Planet = {
    planet: '',
    habitability: '',
    size: Sizes.bigSize,
    first_appearance: '',
    habitants: '',
    alt_img: ''
  }

  constructor(private planetService: PlanetsService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar,
              private dialog: MatDialog) { }

  ngOnInit(): void {

    if (!this.router.url.includes('edit')) {
      return;
    }
    
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.planetService.getPlanetById(id))).subscribe(planet => this.planet = planet);
  }

  saveData() {
    if (this.planet.planet.trim().length === 0) {
      return;
    }

    //update existing planet
    if (this.planet.id) {
      this.planetService.updatePlanet(this.planet).subscribe(planet => this.showSnackbar('Planet updated'));
    } else {
      //create new planet
      this.planetService.addPlanet(this.planet).subscribe(planet => {
        this.router.navigate(['/planets/edit', planet.id]);
        this.showSnackbar('Planet created succesfully');
      })
    }
  }

  deletePlanet() {

   const dialog = this.dialog.open(ConfirmComponent, {
     width: '350px',
     data: {...this.planet}
   });
   
   dialog.afterClosed().subscribe((result) => {
     if (result) {
        this.planetService.deletePlanet(this.planet.id!).subscribe(
      res => { this.router.navigate(['/planets']) 
      //una vez se borre, que navegue a la pag principal
      }
    )
     }
   })

   
  }

  showSnackbar(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 2500
    })
  }

}
