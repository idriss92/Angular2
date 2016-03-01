System.register(['angular2/core', './task-service'], function(exports_1, context_1) {
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
    var core_1, task_service_1;
    var TaskForm;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (task_service_1_1) {
                task_service_1 = task_service_1_1;
            }],
        execute: function() {
            //const styles: string = require('./task-form.scss');
            //const template: string = require('./task-form.html');
            TaskForm = (function () {
                function TaskForm(taskService) {
                    this.taskService = taskService;
                    this.title = '';
                }
                TaskForm.prototype.clear = function () {
                    this.title = '';
                };
                TaskForm.prototype.submit = function () {
                    var title = this.title.trim();
                    if (title.length) {
                        this.taskService.createTask(title);
                    }
                    this.clear();
                };
                TaskForm = __decorate([
                    core_1.Component({
                        selector: 'task-form',
                        //styles: [styles],
                        //template
                        template: "\n<form class=\"task-form\" (ngSubmit)=\"submit()\" novalidate>\n  <input\n    (keyup.escape)=\"clear()\"\n    ngControl=\"title\"\n    [(ngModel)]=\"title\"\n    autocomplete=\"off\"\n    autofocus\n    class=\"task-form__input\"\n    placeholder=\"What needs to be done?\"\n    required\n    type=\"text\">\n</form>"
                    }), 
                    __metadata('design:paramtypes', [task_service_1.TaskService])
                ], TaskForm);
                return TaskForm;
            }());
            exports_1("TaskForm", TaskForm);
        }
    }
});
//# sourceMappingURL=task-component.js.map