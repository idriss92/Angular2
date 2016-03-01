import { Component, OnInit} from 'angular2/core';
import { Router, CanActivate } from 'angular2/router';
import { tokenNotExpired } from 'angular2-jwt'
import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
    selector : 'my-dashboard',
    templateUrl: 'app/dashboard.component.html',
    styleUrls: ['app/dashboard.component.css']
})

@CanActivate(() => tokenNotExpired())

export class DashboardComponent implements OnInit{
    heroes : Hero[] = [];
constructor(
  private _router: Router,
  private _heroService: HeroService) {
}

    
  ngOnInit() {
    this._heroService.getHeroes()
      .then(heroes => this.heroes = heroes.slice(1,5));
  }
    
    gotoDetail(hero: Hero){
        let link = ['HeroDetail',{id: hero.id}];
        this._router.navigate(link);
    }
}