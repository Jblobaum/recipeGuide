import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DrinkNameService } from '../services/drink-name.service';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';


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
    private drinkNameService: DrinkNameService,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService
  ){}

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
  }



  ngOnInit(): void {
    const searchField = document.getElementById('search');
    const keyUp = fromEvent(searchField, 'keyup')
    .pipe(
      map(e=> e.target["value"]),
      debounceTime(400),
      distinctUntilChanged()
    );
    keyUp.subscribe(val => this.drinkNameService.drinkByName(val).subscribe(results => this.recipes = results['drinks']))

   
  
    this.getDrinkCategoryService.getDrinkCategory().subscribe(results => this.categories = results['drinks'])

}

}
