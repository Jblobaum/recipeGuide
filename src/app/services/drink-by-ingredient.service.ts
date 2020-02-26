import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkByIngredientService {

  constructor(private http: HttpClient) { }

  drinkById(id:string){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${id}`)
  }
}
