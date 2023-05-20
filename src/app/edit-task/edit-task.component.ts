import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { Task } from '../models/task.model';


@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Task,
    public dialogRef: MatDialogRef<object>
  ){}
}
