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
//  hmburger menu animation
export const mobileMenuState = trigger('mobileMenuTrigger', [
  transition(':enter', [
    style({
      transform: 'translateY(-100%)',
    }),
    animate(
      600,
      style({
        transform: 'translateY(0)',
      })
    ),
  ]),
  transition(':leave', [
    style({
      transform: 'translateY(0)',
    }),
    animate(
      600,
      style({
        transform: 'translateY(-100%)',
        opacity: 0,
      })
    ),
  ]),
]);

// open close hmburger menu
