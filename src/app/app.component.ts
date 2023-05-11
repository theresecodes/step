import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'step';
  doingTasks = [
    { title: 'The quick brown fox jump over the lazy dog. The quick brown fox jump over the lazy dog. The quick brown fox jump over the lazy dog'},
    { title: 'The quick brown  fox jump over the lazy dog.  fox jump over the lazy dog.   fox jump over the lazy dog. The quick brown fox jump over the lazy dog. The quick brown fox jump over the lazy dog'},
  ];
  pausedTasks = [
    { title: 'View Task Card Component'},
    { title: 'Edit Task'},
    { title: 'Add Task'},
    { title: 'Delete Task'},
    { title: 'Drag Cards Between Card Column'}
  ];
  doneTasks = [
    { title: 'View Task Card Component'},
    { title: 'Edit Task'},
    { title: 'Add Task'},
    { title: 'Delete Task'},
    { title: 'Workflow Doing, Paused, Done Task'},
    { title: 'The quick brown fox jump over the lazy dog. The quick brown fox jump over the lazy dog. The quick brown fox jump over the lazy dog'},
    { title: 'Delete Task'},
    { title: 'Delete Task'},
    { title: 'Delete Task'},
    { title: 'Delete Task'},
    { title: 'Drag Cards Between Card Column'}
  ];
}
