import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetCategoriesService {

  constructor( private http: HttpClient) { }

  getCategories(){
    return this.http.get(`https://www.themealdb.com/api/json/v1/1/list.php?c=list`)
  }
}
