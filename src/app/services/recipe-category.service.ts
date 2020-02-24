import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeCategoryService {

  constructor(private http: HttpClient) { }

  recipeByCategory(category){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }
}
