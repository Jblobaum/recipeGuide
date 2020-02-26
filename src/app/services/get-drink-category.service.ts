import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetDrinkCategoryService {

  constructor(private http: HttpClient) { }

  getDrinkCategory(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
  }
}
