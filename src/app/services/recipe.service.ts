import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  apiUrl="https://www.themealdb.com/api/json/v1/1/filter.php?i="


    constructor(private http:HttpClient) { }

    getRecipes(search:any): Observable<any> {
      return this.http.get(`${this.apiUrl}`+`${search}`)     
    };
}
