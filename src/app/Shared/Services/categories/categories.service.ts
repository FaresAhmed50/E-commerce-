import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Environments} from '../../../Environments/environments';

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
