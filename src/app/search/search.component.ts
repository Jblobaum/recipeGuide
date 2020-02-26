import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GetCategoriesService } from '../services/get-categories.service';
import { RecipeCategoryService } from '../services/recipe-category.service';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import * as RecipeActions from '../store/actions/recipeAction'
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
  favRecipes$: Observable<Object>;

  constructor(
    private _snackBar: MatSnackBar,
    private getCategoriesService: GetCategoriesService,
    private recipeCategoryService: RecipeCategoryService,
    private store: Store<RootState>
  ) {
    this.favRecipes$ = store.pipe(select('recipe'))
  }

  addFavMeal(recipeToAdd){
    this.store.dispatch(RecipeActions.add(recipeToAdd))
    console.log(this.favRecipes$);
    
  }
  

  openSnackBar() {
    this._snackBar.open(this.message, "", { duration: 2000 });
  };

  byCategory() {
    console.log(this.value);

    this.recipeCategoryService.recipeByCategory(this.value).subscribe(results => this.recipes = results['meals'])
  }



  ngOnInit(): void {

    this.getCategoriesService.getCategories().subscribe(results => this.categories = results['meals'])

  }

}
