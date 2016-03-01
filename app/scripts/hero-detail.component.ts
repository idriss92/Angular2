import {Component,OnInit} from 'angular2/core'
import {RouteParams} from 'angular2/router';

import {CanActivate} from 'angular2/router';
import {tokenNotExpired} from 'angular2-jwt';

import {Hero} from './hero'
import { HeroService } from './hero.service';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/views/hero-detail.component.html',
    styleUrls: ['app/css/hero-detail.component.css'],
    inputs:['hero']
})

//@CanActivate(() => tokenNotExpired())
export class HeroDetailComponent implements OnInit{
    hero : Hero;
    
    constructor(private _heroService: HeroService, private _routeParams: RouteParams){
        
    }
    
    
    ngOnInit(){
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id).then(hero=>this.hero = hero);
    }
    
    goBack(){
        window.history.back();
    }
}