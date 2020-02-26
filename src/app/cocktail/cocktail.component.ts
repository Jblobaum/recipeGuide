import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';
import { RootState } from '../store';
import { Store, select } from '@ngrx/store';
import * as DrinkActions from '../store/actions/drinkAction'



@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {
  message: string = "Added to Favorites"
  recipes: Array<Object>;
  categories: Array<string> = []
  value: string = ""
  
  recipeBreakdown: Object;
  drink: Object;
  favDrinks$: Observable<Object>
  

  constructor(
    private _snackBar: MatSnackBar,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService,
    private store: Store<RootState>
  ){
    this.favDrinks$ = store.pipe(select('drink'))
  }

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
    
  }

  addFavDrink(drinkToAdd){
    this.store.dispatch(DrinkActions.add(drinkToAdd))
  }


  ngOnInit(): void {

    this.getDrinkCategoryService.getDrinkCategory().subscribe(results => this.categories = results['drinks'])

    
}

}
