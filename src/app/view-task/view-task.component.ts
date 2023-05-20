import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { EditTaskComponent } from '../edit-task/edit-task.component';
import { Task } from '../models/task.model';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.scss']
})
export class ViewTaskComponent {
  @Input({ required: true }) task!: Task;
  /**
   * Details of taskDiv such as width and position in the screen
   * is used as reference to be passed to EditTaskComponent.
   */
  @ViewChild('taskDiv') taskDiv!: ElementRef;

  constructor(public dialog: MatDialog,) { }

  openEditTask() {
    const originalTask = { ...this.task };
    const dialogRef = this.dialog.open(EditTaskComponent, this.getDialogConfig(originalTask));

    dialogRef.afterClosed().subscribe(result => {
      if (result) this.task = { ...result }
    });
  }

  private getDialogConfig(originalTask: Task): MatDialogConfig {
    const position = {
      top: `${this.taskDiv.nativeElement.offsetTop}px`,
      left: `${this.taskDiv.nativeElement.offsetLeft}px`
    }
    const width = `${this.taskDiv.nativeElement.clientWidth}px`

    return { data: originalTask, position, width }
  }
}
