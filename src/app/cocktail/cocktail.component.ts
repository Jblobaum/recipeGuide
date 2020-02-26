import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';
import { RootState } from '../store';
import { Store, select } from '@ngrx/store';
import * as Actions from '../store/actions'



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
  
  

  constructor(
    private _snackBar: MatSnackBar,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService,
    private store: Store<RootState>
  ){
    
  }

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
    
  }

  addFavDrink(drinkToAdd){
    this.store.dispatch(Actions.addDrink({drink: drinkToAdd}))
  }


  ngOnInit(): void {

    this.getDrinkCategoryService.getDrinkCategory().subscribe(results => this.categories = results['drinks'])

    
}

}
