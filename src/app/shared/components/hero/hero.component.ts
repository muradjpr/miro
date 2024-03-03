import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { heroAnimationState } from '../../../core/constants/hero.animations';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RatingModule, FormsModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css',
  animations: [heroAnimationState],
})
export class HeroComponent {
  rating: number = 4;
}
