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
import { IngredientBreakdownComponent } from './ingredient-breakdown/ingredient-breakdown.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent, data: {animation: 'login'}},
  {path: 'breakdown/:id', component: BreakdownComponent, canActivate: [UserGuard], data: {animation: 'breakdown'}},
  {path: 'signup', component: SignUpComponent, data: {animation: 'signup'}},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard], data: {animation: 'user'}},
  {path: 'cocktail', component: CocktailComponent, canActivate: [UserGuard], data: {animation: 'cocktail'}},
  {path: 'meal', component: SearchComponent, canActivate: [UserGuard], data: {animation: 'meal'}},
  {path: 'ingredientbreakdown/:ingredient', component: IngredientBreakdownComponent, canActivate: [UserGuard], data: {animation: 'ingredientbreakdown'}},
  {path: 'mealbreakdown/:id', component: MealBreakdownComponent, canActivate: [UserGuard], data: {animation: 'breakdown'}},
  {path: '**', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
