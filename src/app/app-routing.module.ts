import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MealBreakdownComponent } from './meal-breakdown/meal-breakdown.component';
import { SearchComponent } from './search/search.component';
import { BreakdownComponent } from './breakdown/breakdown.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'breakdown/:id', component: BreakdownComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'user/:username', component: UserComponent},
  {path: 'cocktail', component: CocktailComponent},
  {path: 'meal', component: SearchComponent},
  {path: 'mealbreakdown/:id', component: MealBreakdownComponent},
  {path: '**', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
