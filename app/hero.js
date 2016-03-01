System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var HeroModel, TodoItem, Post;
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
            Post = (function () {
                function Post(id, title, description) {
                    this.id = id;
                    this.title = title;
                    this.description = description;
                }
                return Post;
            }());
            exports_1("Post", Post);
        }
    }
});
//# sourceMappingURL=hero.js.map