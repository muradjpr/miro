import { animate, style, transition, trigger } from '@angular/animations';

export const heroAnimationState = trigger('heroTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.5)' }),
    animate('1s ease-in', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);
