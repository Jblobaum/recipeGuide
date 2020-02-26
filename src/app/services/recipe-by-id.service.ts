import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeByIdService {

  constructor(private http: HttpClient) { }


  recipeById(id:string){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
