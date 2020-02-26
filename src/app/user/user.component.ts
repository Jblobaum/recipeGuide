import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as Actions from '../store/actions'
import * as Selectors from '../store/selectors'
import {  UserService } from '../services/user.service'


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user$: Observable<Object>;
favRecipes$: Observable<Array<Object>>;
favDrinks$: Observable<Array<Object>>;
recipes: Array<Object>;
drinks: Array<Object>;
isEmptyRecipes: boolean;
isEmptyDrinks: boolean;

constructor(
    private store: Store<RootState>
  ) {
    this.favRecipes$ = store.pipe(select(Selectors.getRecipeState))
    this.user$ = store.pipe(select(Selectors.getUserState))
    this.favDrinks$ = store.pipe(select(Selectors.getDrinkState))
    this.favRecipes$.subscribe(val=> this.recipes = val)
    this.favDrinks$.subscribe(val=> this.drinks = val)
    this.isEmptyDrinks = this.drinks === []
    this.isEmptyRecipes = this.recipes === []
   }

   clearFavMeals(){
    this.store.dispatch(Actions.clearRecipe())
    console.log(this.favRecipes$);
    
  }

    clearFavDrinks(){
      this.store.dispatch(Actions.clearDrink())
    }


  ngOnInit(): void {
    
    
  }

}
