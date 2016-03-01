import {Component, OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
import { tokenNotExpired, JwtHelper, AuthHttp} from 'angular2-jwt';
import{Hero} from './hero'
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service'
import {CanActivate} from 'angular2/router';

@Component({
    selector: 'my-heroes',
    templateUrl: 'app/views/heroes.component.html',
    directives: [HeroDetailComponent],
    styleUrls:  ['app/css/heroes.component.css']
//providers : [HeroesComponent]

})

//@CanActivate(() => tokenNotExpired())

export class HeroesComponent implements OnInit { 
    heroes: Hero[];
    selectedHero: Hero;
  
    ngOnInit(){
        this.getHeroes();
    }
    
    onSelect(hero:Hero){ this.selectedHero = hero;}
    
    constructor(
        private _router: Router,
        private _heroService: HeroService//,
        //public authHttp:AuthHttp
        ){
        
    }
    
    getHeroes(){
        this._heroService.getHeroes().then(heroes => this.heroes = heroes);
    }
    gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
    }
    /*
    getSecretThing() {
      this.authHttp.get('http://example.com/api/secretthing')
        .subscribe(
        data => console.log(data.json()),
        err => console.log(err),
        () => console.log('Complete')
        );
    }*/
}
