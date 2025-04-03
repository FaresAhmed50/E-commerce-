import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Environments} from '../../../Environments/environments';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _httpClient : HttpClient = inject(HttpClient);
  env = Environments


  getAllProducts() : Observable<any> {
   return this._httpClient.get(`${this.env}products`);
  }

  getSpecificProduct(productId: string) : Observable<any> {
    return this._httpClient.get(`${this.env}products/${productId}`);
  }



}
