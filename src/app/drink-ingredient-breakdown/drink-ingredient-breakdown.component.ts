import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import { DrinkByIngredientService } from '../services/drink-by-ingredient.service';
import * as Actions from '../store/actions'
import * as Selectors from '../store/selectors'
import { Observable } from 'rxjs';

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
  breakpoint: number;
  user$: Observable<Object>

  constructor(
    private actr: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private store: Store<RootState>,
    private drinkByIngredient: DrinkByIngredientService
  ) { 
    this.ingredient = this.actr.snapshot.params.ingredient
    this.user$ = store.pipe(select(Selectors.getUserState))
  this.user$.subscribe(val=> console.log(val));
  }

  addFavDrink(recipe) {
    this.store.dispatch(Actions.addRecipe({ recipe: recipe }))

  }


  openSnackBar() {
    let config = new MatSnackBarConfig()
    config.panelClass = ['snack-bar-style']
    config.duration = 30000
    this._snackBar.open(this.message, null, config);
  };

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 650) ? 2 : 5;
  }

  ngOnInit(): void {
    this.drinkByIngredient.drinkById(this.actr.snapshot.params.ingredient).subscribe(results => {
      this.recipes = results['drinks']
    })
    this.breakpoint = (window.innerWidth <= 650) ? 2 : 5;
  }

}
