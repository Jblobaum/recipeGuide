import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetCategoriesService } from '../services/get-categories.service';
import { RecipeCategoryService } from '../services/recipe-category.service';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as Actions from '../store/actions'
import * as Selectors from '../store/selectors'
import { MealService } from '../services/meal.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  message: string = "Added to Favorites";
  recipes: Array<Object>;
  categories: Array<Object>;
  value: string;
  user$: Observable<Object>

  constructor(
    private _snackBar: MatSnackBar,
    private getCategoriesService: GetCategoriesService,
    private recipeCategoryService: RecipeCategoryService,
    private store: Store<RootState>,
    private mealService: MealService
  ) {
    this.user$ = store.pipe(select(Selectors.getUserState))
  this.user$.subscribe(val=> console.log(val));
  }

  addFavMeal(recipeToAdd){
    console.log(recipeToAdd['idMeal']);
    console.log(recipeToAdd['strMeal']);
    console.log(recipeToAdd['strMealThumb']);
    this.mealService.addFavMeal(recipeToAdd['idMeal'], recipeToAdd['strMeal'], recipeToAdd['strMealThumb']).subscribe(
      res=>{
        if(res['succes']){
          console.log(res['msg']);
          
        }
        console.log(res['msg']);
      }
    )
    this.store.dispatch(Actions.addRecipe({recipe: recipeToAdd}))
    
  }
  

  openSnackBar() {
    let config = new MatSnackBarConfig()
    config.panelClass = ['snack-bar-style']
    config.duration = 3000
    this._snackBar.open(this.message, null, config);
  };

  byCategory() {
    this.recipeCategoryService.recipeByCategory(this.value).subscribe(results => this.recipes = results['meals'])
  }



  ngOnInit(): void {
    this.getCategoriesService.getCategories().subscribe(results => this.categories = results['meals'])

  }

}
