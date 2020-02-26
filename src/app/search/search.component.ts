import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { GetCategoriesService } from '../services/get-categories.service';
import { RecipeCategoryService } from '../services/recipe-category.service';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as Actions from '../store/actions'

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

  constructor(
    private _snackBar: MatSnackBar,
    private getCategoriesService: GetCategoriesService,
    private recipeCategoryService: RecipeCategoryService,
    private store: Store<RootState>
  ) {
    
  }

  addFavMeal(recipeToAdd){
    this.store.dispatch(Actions.addRecipe({recipe: recipeToAdd}))
    
  }
  

  openSnackBar() {
    let config = new MatSnackBarConfig()
    config.panelClass = ['snack-bar-style']
    config.duration = 30000
    this._snackBar.open(this.message, null, config);
  };

  byCategory() {
    this.recipeCategoryService.recipeByCategory(this.value).subscribe(results => this.recipes = results['meals'])
  }



  ngOnInit(): void {
    this.getCategoriesService.getCategories().subscribe(results => this.categories = results['meals'])

  }

}
