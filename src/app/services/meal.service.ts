import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MealService {



  constructor(
    private http: HttpClient

  ) { }

  addFavMeal(id, meal, img){
    return this.http.post('/api/favmeal/addFavMeal', { idMeal: id, meal: meal, mealImg: img })
  }


}
