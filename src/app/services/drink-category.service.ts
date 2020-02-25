import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkCategoryService {

  constructor(private http: HttpClient) { }

  drinkByCategory(category){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
  }
}
