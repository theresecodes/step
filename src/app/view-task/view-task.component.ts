import { Component, Input } from '@angular/core';

import { Task } from '../models/task.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {
  @Input({required: true}) task!: Task;
}
