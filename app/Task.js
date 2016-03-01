System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Task;
    return {
        setters:[],
        execute: function() {
            Task = (function () {
                function Task(title) {
                    this.completed = false;
                    this.createAt = Firebase.ServerValue.TIMESTAMP;
                    this.title = title;
                }
                return Task;
            }());
            exports_1("Task", Task);
        }
    }
});
//# sourceMappingURL=task.js.map