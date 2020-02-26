import { Component, OnInit } from '@angular/core';
import { MealByIngredientService } from '../services/meal-by-ingredient.service';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { RootState } from '../store';
import * as Actions from '../store/actions'
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-ingredient-breakdown',
  templateUrl: './ingredient-breakdown.component.html',
  styleUrls: ['./ingredient-breakdown.component.scss']
})
export class IngredientBreakdownComponent implements OnInit {
  message: string = "Added to Favorites";
  recipes: Array<Object>;
  categories: Array<Object>;
  ingredient: string

  constructor(
    private mealByIngredient: MealByIngredientService,
    private actr: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private store: Store<RootState>
  ) {
    console.log(this.actr.snapshot.params.ingredient);
    
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
    this.mealByIngredient.recipeByIngredient(this.actr.snapshot.params.ingredient).subscribe(results => {
      this.recipes = results['meals']
    })
  }

}
