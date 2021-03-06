System.register(['angular2/core', 'angular2-jwt'], function(exports_1, context_1) {
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
    var core_1, angular2_jwt_1;
    var ProfileComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (angular2_jwt_1_1) {
                angular2_jwt_1 = angular2_jwt_1_1;
            }],
        execute: function() {
            ProfileComponent = (function () {
                function ProfileComponent(authHttp) {
                    this.authHttp = authHttp;
                    this.profile = JSON.parse(localStorage.getItem('profile'));
                    this.getSecretThing();
                }
                ProfileComponent.prototype.getSecretThing = function () {
                    var _this = this;
                    this.authHttp.get('http://localhost:3001/api/quote')
                        .subscribe(function (data) {
                        console.log(data.json());
                        _this.quote = data.json();
                    }, function (err) { return console.log(err); }, function () { return console.log('Complete'); });
                };
                ProfileComponent = __decorate([
                    core_1.Component({
                        selector: 'profile'
                    }),
                    core_1.View({
                        template: "\n\t <img src=\"{{profile.picture}}\" style=\"width: 50px\" /> {{profile.name}}    \n   <h2>Chuck quote of the day</h2>\n   {{quote}}\n\t"
                    }), 
                    __metadata('design:paramtypes', [angular2_jwt_1.AuthHttp])
                ], ProfileComponent);
                return ProfileComponent;
            }());
            exports_1("ProfileComponent", ProfileComponent);
        }
    }
});
//# sourceMappingURL=profile.component.js.map