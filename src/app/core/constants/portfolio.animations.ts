import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const portfolioInState = trigger('portfolioInTrigger', [
  transition('slideUp => slideDown', [
    style({
      transform: 'translateX(-100%)',
    }),
    animate('600ms ease-in', style({ transform: 'translateX(0%)' })),
  ]),

  transition('slideDown => slideUp', [
    style({
      transform: 'translateX(0%)',
    }),
    animate(
      '600ms ease-out',
      style({ transform: 'translateX(100%)', opacity: 0 })
    ),
  ]),
]);
