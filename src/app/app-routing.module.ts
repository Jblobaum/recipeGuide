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
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {animation: 'home'}},
  {path: 'login', component: LogInComponent, data: {animation: 'login'}},
  {path: 'breakdown/:id', component: BreakdownComponent, data: {animation: 'breakdown'}},
  {path: 'signup', component: SignUpComponent, data: {animation: 'signup'}},
  {path: 'user/:username', component: UserComponent, canActivate: [UserGuard], data: {animation: 'user'}},
  {path: 'cocktail', component: CocktailComponent, data: {animation: 'cocktail'}},
  {path: 'meal', component: SearchComponent, data: {animation: 'meal'}},
  {path: 'ingredientbreakdown/:ingredient', component: IngredientBreakdownComponent, data: {animation: 'ingredientbreakdown'}},
  {path: 'mealbreakdown/:id', component: MealBreakdownComponent, data: {animation: 'breakdown'}},
  {path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
