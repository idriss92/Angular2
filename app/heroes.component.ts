import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

import{Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service'

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/heroes.component.html',
    directives: [HeroDetailComponent],
    styleUrls:  ['app/heroes.component.css']
//providers : [HeroesComponent]

})


export class HeroesComponent implements OnInit { 
    heroes: Hero[];
    selectedHero: Hero;
  
    ngOnInit(){
        this.getHeroes();
    }
    
    onSelect(hero:Hero){ this.selectedHero = hero;}
    
    constructor(
        private _router: Router,
        private _heroService: HeroService){
        
    }
    
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
