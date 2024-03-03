import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-work-together',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-together.component.html',
  styleUrl: './work-together.component.css',
  animations: [],
})
export class WorkTogetherComponent {
  @Input() item: any;
  @Input() index: any;
}
