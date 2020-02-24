import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { RecipeNameService } from '../services/recipeName.service';
import { GetCategoriesService } from '../services/get-categories.service';
import { RecipeCategoryService } from '../services/recipe-category.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup;
  message: string = "Added to Favorites"
  recipes: Array<Object>;
  categories: Array<string> = []
  value: string = ""

  constructor(
    private formBuilder: FormBuilder,
    private _snackBar: MatSnackBar,
    private recipeNameService: RecipeNameService,
    private getCategoriesService: GetCategoriesService,
    private recipeCategoryService: RecipeCategoryService
  ) { }

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };



  ngOnInit(): void {
    const searchField = document.getElementById('search');
    const keyUp = fromEvent(searchField, 'keyup')
    .pipe(
      map(e=> e.target["value"]),
      debounceTime(400),
      distinctUntilChanged()
    );
    keyUp.subscribe(val => this.recipeNameService.recipeByName(val).subscribe(results => this.recipes = results['meals']))

    this.recipeCategoryService.recipeByCategory(this.value).subscribe(results => this.recipes = results['meals'])
  
    this.getCategoriesService.getCategories().subscribe(results => this.categories = results['meals'])

  this.searchForm = this.formBuilder.group({
    param: ['', Validators.compose([Validators.required, Validators.minLength(2)])]
  })
}

}
