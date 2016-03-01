System.register(["angular2/core", 'firebase-angular2/core'], function(exports_1, context_1) {
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
    var core_1, core_2;
    var FirebaseDataService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            FirebaseDataService = (function () {
                function FirebaseDataService(firebaseService) {
                    this.service = firebaseService.child('heroes');
                }
                FirebaseDataService.prototype.getHeroes = function () {
                    var service = this.service;
                    return service.value.map(function (heroes) {
                        return heroes.map(function (h, i) {
                            // TODO: Cleanup
                            return {
                                id: h.id,
                                name: h.name,
                                save: function () {
                                    return service.child(i.toString()).setData({
                                        id: this.id,
                                        name: this.name
                                    });
                                }
                            };
                        });
                    });
                };
                FirebaseDataService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [core_2.FirebaseService])
                ], FirebaseDataService);
                return FirebaseDataService;
            }());
            exports_1("FirebaseDataService", FirebaseDataService);
        }
    }
});
//# sourceMappingURL=firebase-data.service.js.map