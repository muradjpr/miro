import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-works-category-pane',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './works-category-pane.component.html',
  styleUrl: './works-category-pane.component.css',
})
export class WorksCategoryPaneComponent implements OnInit {
  @Input() item: any;

  ngOnInit() {
    console.log(this.item);
  }
}
