import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  _httpClient :HttpClient = inject(HttpClient);
  env = Environments;


  getAllCategories() : Observable<any> {
    return this._httpClient.get(`${this.env.BaseURL}categories`);
  }

}
