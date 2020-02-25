import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DrinkNameService } from '../services/drink-name.service';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';
import * as recipeActions from '../store/actions/recipeAction'
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';


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
  recipeToBreakdown$: Observable<Object>;
  recipeBreakdown: Object;

  constructor(
    private _snackBar: MatSnackBar,
    private drinkNameService: DrinkNameService,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService,
    private store: Store<RootState>
  ){
    this.recipeToBreakdown$ = store.pipe(select('recipe'))
  }

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
  }

  lookCloser(recipeToAdd: Object){
    this.store.dispatch(recipeActions.breakdown({recipe: recipeToAdd}))
    console.log(this.recipeBreakdown);
    
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
    
    this.recipeToBreakdown$.subscribe(val=> this.recipeBreakdown = val);
}

}
