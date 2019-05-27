import { Component, OnInit } from '@angular/core';
import { HeroesService,Heroes } from '../../servicios/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {


heroes:Heroes[] = [];
  constructor(private _heroesService:HeroesService) { 
    
  }

  ngOnInit() {
    this.heroes=this._heroesService.getHeroes();
    console.log(this.heroes);
  }

}
