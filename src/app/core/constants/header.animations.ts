import { animate, style, transition, trigger } from '@angular/animations';

export const headerAnimationState = trigger('headerAnimationTrigger', []);

export const subMenuState = trigger('submenuTrigger', [
  transition(':enter', [
    style({
      transform: 'translateX(-100%)',
    }),
    animate(
      400,
      style({
        transform: 'translateX(0)',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateX(0)',
    }),
    animate(
      400,
      style({
        transform: 'translateX(100%)',
        opacity: 0,
      })
    ),
  ]),
]);
