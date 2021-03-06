System.register(['./task', 'angular2/core'], function(exports_1, context_1) {
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
    var task_1, core_1;
    var TaskService;
    return {
        setters:[
            function (task_1_1) {
                task_1 = task_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TaskService = (function () {
                function TaskService(ref) {
                    this.ref = ref;
                }
                TaskService.prototype.createTask = function (title) {
                    this.ref.push(new task_1.Task(title), function (error) {
                        if (error) {
                            console.error("Error @ createTask : ", error);
                        }
                    });
                };
                TaskService.prototype.deleteTask = function (task) {
                    this.ref.child(task.key).remove(function (error) {
                        if (error) {
                            console.error('Error @ deleteTask : ', error);
                        }
                    });
                };
                TaskService.prototype.updateTask = function (task, changes) {
                    this.ref.child(task.key).update(changes, function (error) {
                        if (error) {
                            console.error('Error @ updateTask : ', error);
                        }
                    });
                };
                TaskService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [Firebase])
                ], TaskService);
                return TaskService;
            }());
            exports_1("TaskService", TaskService);
        }
    }
});
//# sourceMappingURL=task-service.js.map