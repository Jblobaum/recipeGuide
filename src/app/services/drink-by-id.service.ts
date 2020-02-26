import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DrinkByIdService {

  constructor(private http: HttpClient) { }

  drinksById(id: string){
    return this.http.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
  }
}
