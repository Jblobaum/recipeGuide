import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MealBreakdownComponent } from './meal-breakdown/meal-breakdown.component';
import { SearchComponent } from './search/search.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { UserGuard } from './guards/user.guard';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'breakdown/:id', component: BreakdownComponent, canActivate: [UserGuard]},
  {path: 'signup', component: SignUpComponent},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard]},
  {path: 'cocktail', component: CocktailComponent, canActivate: [UserGuard]},
  {path: 'meal', component: SearchComponent, canActivate: [UserGuard]},
  {path: 'mealbreakdown/:id', component: MealBreakdownComponent, canActivate: [UserGuard]},
  {path: '**', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
