System.register(['angular2/core', 'angular2/router', 'angular2-jwt', './hero.service', './dashboard.component', './heroes.component', './hero-detail.component', './hero-add.component', './profile.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, angular2_jwt_1, hero_service_1, dashboard_component_1, heroes_component_1, hero_detail_component_1, hero_add_component_1, profile_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (dashboard_component_1_1) {
                dashboard_component_1 = dashboard_component_1_1;
            },
            function (heroes_component_1_1) {
                heroes_component_1 = heroes_component_1_1;
            },
            function (hero_detail_component_1_1) {
                hero_detail_component_1 = hero_detail_component_1_1;
            },
            function (hero_add_component_1_1) {
                hero_add_component_1 = hero_add_component_1_1;
            },
            function (profile_component_1_1) {
                profile_component_1 = profile_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(location) {
                    this.lock = new Auth0Lock('EMrDic8PFdzVsYuhBTJwqgdxjJywX2FJ', 'thehigherkiller.auth0.com');
                    this.jwtHelper = new angular2_jwt_1.JwtHelper();
                    this.location = location;
                }
                AppComponent.prototype.login = function () {
                    var _this = this;
                    var self = this;
                    this.lock.show(function (err, profile, id_token) {
                        if (err) {
                            throw new Error(err);
                        }
                        localStorage.setItem('profile', JSON.stringify(profile));
                        localStorage.setItem('id_token', id_token);
                        console.log(_this.jwtHelper.decodeToken(id_token), _this.jwtHelper.getTokenExpirationDate(id_token), _this.jwtHelper.isTokenExpired(id_token));
                        self.loggedIn();
                    });
                };
                AppComponent.prototype.logout = function () {
                    localStorage.removeItem('profile');
                    localStorage.removeItem('id_token');
                    this.loggedIn();
                };
                AppComponent.prototype.loggedIn = function () {
                    return angular2_jwt_1.tokenNotExpired();
                };
                AppComponent.prototype.isActive = function (path) {
                    return this.location.path() === path;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n<nav class=\"navbar navbar-default navbar-static-top\">\n    <div class=\"container\">\n        <div class=\"navbar-header\">\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\" aria-controls=\"navbar\">\n                <span class=\"sr-only\">Toggle navigation</span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n                <span class=\"icon-bar\"></span>\n            </button>\n            <a class=\"navbar-brand\" href=\"#\">Fifa16 - Leagues</a>\n        </div>\n        <div id=\"navbar\" class=\"navbar-collapse collapse\">\n            <!--ul class=\"nav navbar-nav\">\n                <li [class.active]=\"isActive('')\"><a [routerLink]=\"['/Home']\">Todo</a></li>\n                <li [class.active]=\"isActive('/about/Hello world')\"><a [routerLink]=\"['/About', {'id': 'Hello world'}]\">About</a></li>\n            </ul-->\n            <ul class=\"nav navbar-nav navbar-right\">\n              <li *ngIf=\"loggedIn()\" [class.active]=\"isActive('/addHero')\"><a [routerLink]=\"['AddHero']\">Add new Hero</a> </li>\n              <li *ngIf=\"loggedIn()\" [class.active]=\"isActive('/dashboard')\"><a [routerLink]=\"['Dashboard']\">Dashboard</a></li>\n              <li *ngIf=\"loggedIn()\" [class.active]=\"isActive('/heroes')\"><a [routerLink]=\"['Heroes']\">Heroes</a></li>\n              <li><a href=\"#\" *ngIf=\"!loggedIn()\" (click)=\"login()\">Login</a></li>\n              <li><a href=\"#\" *ngIf=\"loggedIn()\" (click)=\"logout()\">Logout</a></li>\n            </ul>\n        </div>\n    </div>\n</nav> \n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>    ",
                        //templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, router_1.RouterLink, router_1.RouterOutlet],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            hero_service_1.HeroService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/heroes',
                            name: 'Heroes',
                            component: heroes_component_1.HeroesComponent
                        },
                        {
                            path: '/dashboard',
                            name: 'Dashboard',
                            component: dashboard_component_1.DashboardComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/details/:id',
                            name: 'HeroDetail',
                            component: hero_detail_component_1.HeroDetailComponent
                        },
                        {
                            path: '/addHero',
                            name: 'AddHero',
                            component: hero_add_component_1.HeroAddComponent
                        },
                        {
                            path: '/profile',
                            name: 'Profile',
                            component: profile_component_1.ProfileComponent
                        }
                    ]), 
                    __metadata('design:paramtypes', [router_1.Location])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map