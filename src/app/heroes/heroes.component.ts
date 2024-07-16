import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../get-data.service';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];
  url: string = '';

  constructor(
    private heroService: HeroService,
    private getData: GetDataService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.url = 'http://localhost:3000/heroData';
    const data = this.getData.getData(this.url);
    this.heroes = data;
  }

  fetchData() {
    this.url = 'http://localhost:3000/heroData';
    this.getData.getData(this.url);
  }
}
