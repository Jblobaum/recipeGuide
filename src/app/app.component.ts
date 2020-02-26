import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

export const routeAnimations  =
trigger('routeAnimations', [
  transition('* <=> *', [
    style({ position: 'relative', top: '0px' }),
    query(':enter, :leave',  [
      style({
        position: 'absolute',
        top: '0px',
        left: 0,
        width: '100%'
      })
    ], { optional: true }),
    query(':enter', [
      style({ left: '100%'})
    ], { optional: true }),
    query(':leave', animateChild(), { optional: true }),
    group([
      query(':leave', [
        animate('600ms ease-out', style({ left: '-100%'}))
      ], { optional: true }),
      query(':enter', [
        animate('600ms ease-out', style({ left: '0%'}))
      ], { optional: true })
    ])
  ])
]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent {
  title = 'recipeGuide';


constructor(private userService: UserService){}

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && 
  outlet.activatedRouteData['animation'];
  }

logOut(){
  this.userService.logOut()
}

}
