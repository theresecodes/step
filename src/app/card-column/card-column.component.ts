import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-column',
  templateUrl: './card-column.component.html',
  styleUrls: ['./card-column.component.scss']
})
export class CardColumnComponent {
  @Input({ required: true }) title = '';
  @Input({ required: false }) height = 600;
  @Input({ required: false }) marginTop = 4.5;
}
