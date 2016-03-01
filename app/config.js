System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FIREBASE_URL, FIREBASE_TASKS_URL;
    return {
        setters:[],
        execute: function() {
            exports_1("FIREBASE_URL", FIREBASE_URL = 'https://blazing-fire-591.firebaseio.com/');
            exports_1("FIREBASE_TASKS_URL", FIREBASE_TASKS_URL = FIREBASE_URL + "/tasks");
        }
    }
});
//# sourceMappingURL=config.js.map