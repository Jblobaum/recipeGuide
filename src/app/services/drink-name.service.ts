import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkNameService {

  constructor(private http:HttpClient) {}
    
  drinkByName(name){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
    }
   
}
