System.register(['angular2/core', './hero', 'angular2/router', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, hero_1, router_1, angular2_jwt_1;
    var HeroAddComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            HeroAddComponent = (function () {
                function HeroAddComponent() {
                    this.powers = ['Really Smart', 'Super Flexible',
                        'Super Hot', 'Weather Changer'];
                    this.model = new hero_1.HeroModel(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
                    this.submitted = false;
                    this.active = true;
                }
                HeroAddComponent.prototype.onSubmit = function () {
                    this.submitted = true;
                };
                Object.defineProperty(HeroAddComponent.prototype, "diagnostic", {
                    // Remove this when we're done
                    get: function () {
                        return JSON.stringify(this.model);
                    },
                    enumerable: true,
                    configurable: true
                });
                HeroAddComponent.prototype.newHero = function () {
                    var _this = this;
                    this.model = new hero_1.HeroModel(42, '', '');
                    this.active = false;
                    setTimeout(function () { return _this.active = true; }, 0);
                };
                HeroAddComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-add',
                        templateUrl: 'app/hero-add.component.html'
                    }),
                    router_1.CanActivate(function () { return angular2_jwt_1.tokenNotExpired(); }), 
                    __metadata('design:paramtypes', [])
                ], HeroAddComponent);
                return HeroAddComponent;
            }());
            exports_1("HeroAddComponent", HeroAddComponent);
        }
    }
});
//# sourceMappingURL=hero-add.component.js.map