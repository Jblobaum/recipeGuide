import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { trigger, transition, style, query, animateChild, animate, group } from '@angular/animations';
import { RouterOutlet, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from './store';
import * as Selectors from '../app/store/selectors'
import * as Actions from '../app/store/actions'

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
  user$: Observable<Object>
  isLoginRoute: boolean;
  isSignupRoute: boolean;

constructor(
  private userService: UserService,
  private store: Store<RootState>,
  ){this.user$ = store.pipe(select(Selectors.getUserState))
  this.user$.subscribe(val=> console.log(val));
  }

prepareRoute(outlet: RouterOutlet) {
  return outlet && outlet.activatedRouteData && 
  outlet.activatedRouteData['animation'];
  }

logOut(){
  this.userService.logOut()
  this.store.dispatch(Actions.clearUser())
}

}
