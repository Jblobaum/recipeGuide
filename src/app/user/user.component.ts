import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as RecipeActions from '../store/actions/recipeAction'
import * as DrinkActions from '../store/actions/drinkAction'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user$: Observable<Object>;
favRecipes$: Observable<Object>;
favDrinks$: Observable<Object>

constructor(
    private store: Store<RootState>,
    private storeA: Store<RootState>,
    private storeB: Store<RootState>
  
  ) {
    this.favRecipes$ = storeA.pipe(select('recipe'))
    this.user$ = store.pipe(select('user'))
    this.favDrinks$ = storeB.pipe(select('drink'))
   }

   clearFavMeals(){
    this.storeA.dispatch(RecipeActions.clear())
    console.log(this.favRecipes$);
    
  }

    clearFavDrinks(){
      this.storeB.dispatch(DrinkActions.clear())
    }


  ngOnInit(): void {
    
  }

}
