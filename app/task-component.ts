import { Component } from 'angular2/core';
import { TaskService } from './task-service';

//const styles: string = require('./task-form.scss');
//const template: string = require('./task-form.html');


@Component({
  selector: 'task-form',
  //styles: [styles],
  //template
  template: `
<form class="task-form" (ngSubmit)="submit()" novalidate>
  <input
    (keyup.escape)="clear()"
    ngControl="title"
    [(ngModel)]="title"
    autocomplete="off"
    autofocus
    class="task-form__input"
    placeholder="What needs to be done?"
    required
    type="text">
</form>`
})

export class TaskForm {
  title: string = '';

  constructor(private taskService: TaskService) {}

  clear(): void {
    this.title = '';
  }

  submit(): void {
    const title: string = this.title.trim();
    if (title.length) {
      this.taskService.createTask(title);
    }
    this.clear();
  }
}