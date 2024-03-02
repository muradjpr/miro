import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-category-pane',
  standalone: true,
  imports: [],
  templateUrl: './category-pane.component.html',
  styleUrl: './category-pane.component.css',
})
export class CategoryPaneComponent {
  @Input() item: any;
}
