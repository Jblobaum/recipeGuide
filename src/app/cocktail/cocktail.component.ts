import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';
import { RootState } from '../store';
import { Store, select } from '@ngrx/store';
import * as Actions from '../store/actions'
import * as Selectors from '../store/selectors'



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
  user$: Observable<Object>
  recipeBreakdown: Object;
  drink: Object;
  breakpoint: number;
  
  

  constructor(
    private _snackBar: MatSnackBar,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService,
    private store: Store<RootState>
  ){
    this.user$ = store.pipe(select(Selectors.getUserState))
  this.user$.subscribe(val=> console.log(val));
  }

  openSnackBar(){
    let config = new MatSnackBarConfig()
    config.panelClass = ['snack-bar-style']
    config.duration = 30000
    this._snackBar.open(this.message, null, config);
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
    
  }

  addFavDrink(drinkToAdd){
    this.store.dispatch(Actions.addDrink({drink: drinkToAdd}))
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 650) ? 2 : 5;
  }

  ngOnInit(): void {

    this.getDrinkCategoryService.getDrinkCategory().subscribe(results => this.categories = results['drinks'])

    this.breakpoint = (window.innerWidth <= 650) ? 2 : 5;
}

}
