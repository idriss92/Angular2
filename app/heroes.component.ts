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
    errorMessage : string;
  
    ngOnInit(){
        this.getHeroes();
    }
    
    onSelect(hero:Hero){ this.selectedHero = hero;}
    
    constructor(
        private _router: Router,
        private _heroService: HeroService){
        
    }
    
    getHeroes(){
        this._heroService.getHeroes()
                        .then(
                            heroes => this.heroes = heroes,
                            error => this.errorMessage = <any> error
                        );
        //this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    
    addHero(name:string){
        if(!name){return;}
        this._heroService.addHero(name)
                            .then(
                                hero => this.heroes.push(hero),
                                error => this.errorMessage = <any> error
                            );
    }
}
