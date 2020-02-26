import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import { DrinkByIngredientService } from '../services/drink-by-ingredient.service';
import * as Actions from '../store/actions'

@Component({
  selector: 'app-drink-ingredient-breakdown',
  templateUrl: './drink-ingredient-breakdown.component.html',
  styleUrls: ['./drink-ingredient-breakdown.component.scss']
})
export class DrinkIngredientBreakdownComponent implements OnInit {
  message: string = "Added to Favorites";
  recipes: Array<Object>;
  categories: Array<Object>;
  ingredient: string

  constructor(
    private actr: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private store: Store<RootState>,
    private drinkByIngredient: DrinkByIngredientService
  ) { 
    this.ingredient = this.actr.snapshot.params.ingredient
  }

  addFavMeal(recipeToAdd) {
    this.store.dispatch(Actions.addRecipe({ recipe: recipeToAdd }))

  }


  openSnackBar() {
    let config = new MatSnackBarConfig()
    config.panelClass = ['snack-bar-style']
    config.duration = 30000
    this._snackBar.open(this.message, null, config);
  };

  ngOnInit(): void {
    this.drinkByIngredient.drinkById(this.actr.snapshot.params.ingredient).subscribe(results => {
      this.recipes = results['drinks']
    })
  }

}
