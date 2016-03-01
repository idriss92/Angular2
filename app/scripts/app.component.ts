import { Component, View, bind } from 'angular2/core';
import { RouteConfig, RouterOutlet,APP_BASE_HREF, Router, Location, CanActivate, RouterLink, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import { tokenNotExpired, JwtHelper, AuthHttp} from 'angular2-jwt';
import { LocationStrategy, HashLocationStrategy } from 'angular2/router';
import {HTTP_PROVIDERS, Http} from 'angular2/http';


import { HeroService } from './hero.service';
import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroAddComponent } from './hero-add.component';
import {ProfileComponent} from './profile.component';

declare var Auth0Lock;

@Component({
    selector:'my-app',
    template: `
<nav class="navbar navbar-default navbar-static-top">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Fifa16 - Leagues</a>
        </div>
        <div id="navbar" class="navbar-collapse collapse">
            <!--ul class="nav navbar-nav">
                <li [class.active]="isActive('')"><a [routerLink]="['/Home']">Todo</a></li>
                <li [class.active]="isActive('/about/Hello world')"><a [routerLink]="['/About', {'id': 'Hello world'}]">About</a></li>
            </ul-->
            <ul class="nav navbar-nav navbar-right">
              <li *ngIf="loggedIn()" [class.active]="isActive('/addHero')"><a [routerLink]="['AddHero']">Add new Hero</a> </li>
              <li *ngIf="loggedIn()" [class.active]="isActive('/dashboard')"><a [routerLink]="['Dashboard']">Dashboard</a></li>
              <li *ngIf="loggedIn()" [class.active]="isActive('/heroes')"><a [routerLink]="['Heroes']">Heroes</a></li>
              <li><a href="#" *ngIf="!loggedIn()" (click)="login()">Login</a></li>
              <li><a href="#" *ngIf="loggedIn()" (click)="logout()">Logout</a></li>
            </ul>
        </div>
    </div>
</nav> 
<div class="container">
    <router-outlet></router-outlet>
</div>    `,
    //templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css'],
    directives: [ROUTER_DIRECTIVES,RouterLink,RouterOutlet],
    providers : [
        ROUTER_PROVIDERS,
        HeroService
    ]
})

@RouteConfig([
    {
        path:'/heroes',
        name:'Heroes',
        component:HeroesComponent
    },
    {
        path:'/dashboard',
        name:'Dashboard',
        component:DashboardComponent,
        useAsDefault: true
    },
    {
        path:'/details/:id',
        name:'HeroDetail',
        component:HeroDetailComponent
    },
    {
        path : '/addHero',
        name : 'AddHero',
        component : HeroAddComponent
    },
    {
        path: '/profile',
        name : 'Profile',
        component: ProfileComponent
    }
])


export class AppComponent{
    lock = new Auth0Lock('EMrDic8PFdzVsYuhBTJwqgdxjJywX2FJ','thehigherkiller.auth0.com');
    jwtHelper: JwtHelper = new JwtHelper();
    location: Location;
    
    constructor(location:Location){
        this.location = location;
    }
    
    login() {
      var self = this;
      this.lock.show((err: string, profile: string, id_token: string) => {
        if (err) {
          throw new Error(err);
        }

        localStorage.setItem('profile', JSON.stringify(profile));
        localStorage.setItem('id_token', id_token);

        console.log(
          this.jwtHelper.decodeToken(id_token),
          this.jwtHelper.getTokenExpirationDate(id_token),
          this.jwtHelper.isTokenExpired(id_token)
        );

        self.loggedIn();
      });
    }
    
    logout(){
        localStorage.removeItem('profile');
        localStorage.removeItem('id_token');
        
        this.loggedIn();
    }
    
    loggedIn(){
        return tokenNotExpired();
    }
    
    isActive(path){
        return this.location.path() === path;
    }
}