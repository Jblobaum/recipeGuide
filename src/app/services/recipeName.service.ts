import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeNameService {

  constructor(private http: HttpClient) { }

  recipeByName(name){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`)
  }

}
