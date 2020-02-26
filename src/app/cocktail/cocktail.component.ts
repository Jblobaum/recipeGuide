import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { fromEvent, Observable } from 'rxjs';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { DrinkNameService } from '../services/drink-name.service';
import { GetDrinkCategoryService } from '../services/get-drink-category.service';
import { DrinkCategoryService } from '../services/drink-category.service';



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
  drink: Object;
  

  constructor(
    private _snackBar: MatSnackBar,
    private drinkNameService: DrinkNameService,
    private getDrinkCategoryService: GetDrinkCategoryService,
    private drinkCategoryService: DrinkCategoryService,
  ){
    
  }

  openSnackBar(){
    this._snackBar.open(this.message, "", {duration: 2000});
  };

  byCategory(){
    console.log(this.value);
    this.drinkCategoryService.drinkByCategory(this.value).subscribe(results => this.recipes = results['drinks'])
    
  }


  ngOnInit(): void {

    this.getDrinkCategoryService.getDrinkCategory().subscribe(results => this.categories = results['drinks'])

    
}

}
