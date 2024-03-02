import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './feature.component.html',
  styleUrl: './feature.component.css',
})
export class FeatureComponent {
  @Input() feature: any;
}
