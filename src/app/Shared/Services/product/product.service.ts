import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Environments} from '../../../Environments/environments';
import {map, Observable} from 'rxjs';
import {Product} from '../../Interface/product/product';
import {Api} from '../../Interface/Api/api';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  _httpClient : HttpClient = inject(HttpClient);
  env = Environments


  getAllProducts(pages : number = 1 ) : Observable<Api> {

    const params = new HttpParams().set('page', pages.toString());

   return this._httpClient.get<Api>(`${this.env.BaseURL}products` , {params: params});
  }

  getSpecificProduct(productId: string) : Observable<Product> {
    return this._httpClient.get<Product>(`${this.env.BaseURL}products/${productId}`);
  }

  getFilteredProducts(spacificproduct : string) : Observable<Product[]> {
    return this.getAllProducts().pipe(
      map((products ) => products.data.filter(
        (product : Product) => product?.category?.name.toLowerCase().includes(spacificproduct.toLowerCase())
      ))
    );
  }


}
