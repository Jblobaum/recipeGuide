import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { MealBreakdownComponent } from './meal-breakdown/meal-breakdown.component';


const routes: Routes = [
  {path: 'login', component: LogInComponent},
  {path: 'signup', component: SignUpComponent},
  {path: 'user', component: UserComponent},
  {path: 'search', component: SearchComponent},
  {path: 'mealBreakdown/:id', component: MealBreakdownComponent},
  {path: '**', component:LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
