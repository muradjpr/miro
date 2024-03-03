import { animate, style, transition, trigger } from '@angular/animations';

export const trusHeaderState = trigger('trustHeaderInTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'scale(0.1)' }),
    animate('0.7s 1s ease-in', style({ opacity: 1, transform: 'scale(1)' })),
  ]),
]);

export const trustBrandState = trigger('trustBrandTrigger', [
  transition(':enter', [
    style({ opacity: 0, transform: 'translatey(-100%)' }),
    animate(
      '0.7s 1s ease-in',
      style({ opacity: 1, transform: 'translatey(0)' })
    ),
  ]),
]);
