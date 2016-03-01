System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroModel, TodoItem;
    return {
        setters:[],
        execute: function() {
            HeroModel = (function () {
                function HeroModel(id, name, power, alterEgo) {
                    this.id = id;
                    this.name = name;
                    this.power = power;
                    this.alterEgo = alterEgo;
                }
                return HeroModel;
            }());
            exports_1("HeroModel", HeroModel);
            TodoItem = (function () {
                function TodoItem(text, completed) {
                    this.text = text;
                    this.completed = completed;
                }
                return TodoItem;
            }());
            exports_1("TodoItem", TodoItem);
        }
    }
});
//# sourceMappingURL=hero.js.map