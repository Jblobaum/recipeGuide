import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealByIngredientService {

  constructor(private http: HttpClient) { }

  recipeByIngredient(ingredient: string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`)
  }
}
